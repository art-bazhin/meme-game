import * as css from './player-view.module.scss';

import { batch, computed, writable } from 'spred';
import { component, h, node } from 'spred-dom';
import { GameStage } from '../../../../common/game-stage';
import { PlayerController } from '../../../model/player-controller';
import { roomId } from '../../../model/routing';
import { button } from '../button/button';
import { PlayerLogin } from '../player-login/player-login';
import { LoadingScreen } from '../loading-screen/loading-screen';
import { PlayerQuestion } from '../player-question/player-question';
import { PlayerVote } from '../player-vote/player-vote';
import { PlayerResults } from '../player-results/player-results';

export const PlayerView = component(() => {
  const playerId = writable('');
  const playerName = writable('');

  const controller = computed(() => {
    if (!playerId() || !playerName() || !roomId()) return null;
    return new PlayerController(roomId(), playerId(), playerName());
  });

  const showVoteScreen = computed(() => {
    const ctrl = controller();
    if (!ctrl) return false;
    return ctrl.player().id !== ctrl.votedAnswer().playerId;
  });

  const playerIsReady = computed(() => {
    const ctrl = controller();
    if (!ctrl) return false;
    return ctrl.player().done;
  });

  return h('div', { class: css.container }, () => {
    node(() => {
      const ctrl = controller();

      if (!ctrl) {
        return PlayerLogin({
          onLogin: ({ name, id }) => {
            batch(() => {
              playerId(id);
              playerName(name);
            });
          },
        });
      }

      if (ctrl.loading()) {
        return LoadingScreen();
      }

      switch (ctrl.stage()) {
        case GameStage.Lobby:
          return LoadingScreen(() => 'Ожидаем начала игры');

        case GameStage.Question:
          return PlayerQuestion(ctrl);

        case GameStage.Vote:
          if (showVoteScreen()) return PlayerVote(ctrl);
          return LoadingScreen(() => 'Ожидаем других игроков');

        case GameStage.Results:
          if (!playerIsReady()) return PlayerResults(ctrl);
          return LoadingScreen(() => 'Ожидаем других игроков');
      }
    });
  });
});
