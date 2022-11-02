import * as css from './player-view.module.scss';

import { batch, computed, writable } from 'spred';
import { component, h, node } from 'spred-dom';
import { GameStage } from '../../../../common/game-stage';
import { PlayerController } from '../../../model/player-controller';
import { roomId } from '../../../model/routing';
import { button } from '../button/button';
import { PlayerLogin } from '../player-login/player-login';
import { LoadingScreen } from '../loading-screen/loading-screen';

export const PlayerView = component(() => {
  const playerId = writable('');
  const playerName = writable('');
  const controller = computed(() => {
    if (!playerId() || !playerName() || !roomId()) return null;
    return new PlayerController(roomId(), playerId(), playerName());
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

      switch (ctrl.stage()) {
        case GameStage.Lobby:
          return LoadingScreen(() => 'Ожидаем начала игры');

        case GameStage.Question:
          return QuestionTemp(ctrl);

        case GameStage.Vote:
          const state = ctrl.state();
          if (ctrl.player().id === state.answers[state.answerIndex].playerId)
            return null;
          return VoteTemp(ctrl);

        case GameStage.Results:
          return ResultsTemp(ctrl);
      }
    });
  });
});

const ResultsTemp = component((controller: PlayerController) => {
  return h('div', () => {
    button({ text: () => 'Ready', onСlick: () => controller.ready() });
  });
});

const QuestionTemp = component((controller: PlayerController) => {
  return h('div', () => {
    button({
      text: () => controller.player().cards[0],
      onСlick: () => controller.answer(controller.player().cards[0]),
    });

    button({
      text: () => controller.player().cards[1],
      onСlick: () => controller.answer(controller.player().cards[1]),
    });

    button({
      text: () => controller.player().cards[2],
      onСlick: () => controller.answer(controller.player().cards[2]),
    });

    button({
      text: () => controller.player().cards[3],
      onСlick: () => controller.answer(controller.player().cards[3]),
    });

    button({
      text: () => controller.player().cards[4],
      onСlick: () => controller.answer(controller.player().cards[4]),
    });
  });
});

const VoteTemp = component((controller: PlayerController) => {
  return h('div', () => {
    button({
      text: () => '0',
      onСlick: () => controller.vote(0),
    });

    button({
      text: () => '1',
      onСlick: () => controller.vote(1),
    });

    button({
      text: () => '2',
      onСlick: () => controller.vote(2),
    });
  });
});
