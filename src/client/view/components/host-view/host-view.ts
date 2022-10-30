import * as css from './host-view.module.scss';

import { component, h, node } from 'spred-dom';
import { computed } from 'spred';
import { HostController } from '../../../model/host-controller';
import { roomId } from '../../../model/routing';
import { HostLobby } from '../host-lobby/host-lobby';
import { LoadingScreen } from '../loading-screen/loading-screen';
import { GameStage } from '../../../../common/game-stage';
import { HostQuestion } from '../host-question/host-question';
import { HostVote } from '../host-vote/host-vote';

export const HostView = component(() => {
  const controllerSignal = computed(() => new HostController(roomId()));
  const state = computed(() => controllerSignal().state());

  return h('div', { class: css.container }, () => {
    node(() => {
      const controller = controllerSignal();

      if (controller.loading()) {
        return LoadingScreen();
      }

      switch (controller.stage()) {
        case GameStage.Lobby:
          return HostLobby(controller);

        case GameStage.Question:
          return HostQuestion(controller);

        case GameStage.Vote:
          return HostVote(controller);
      }

      return LoadingScreen();
    });
  });
});
