import * as css from './host-view.module.scss';

import { component, h, node, text } from 'spred-dom';
import { computed } from 'spred';
import { HostController } from 'client/model/host-controller';
import { roomId } from 'client/model/routing';
import { HostLobby } from 'client/view/components/host-lobby/host-lobby';
import { LoadingScreen } from 'client/view/ui/loading-screen/loading-screen';

export const HostView = component(() => {
  const controllerSignal = computed(() => new HostController(roomId()));

  const state = computed(() => controllerSignal().state());

  state.subscribe((value) => console.log(value));

  return h('div', { class: css.container }, () => {
    node(() => {
      const controller = controllerSignal();

      if (controller.loading()) {
        return LoadingScreen();
      }

      return HostLobby();
    });
  });
});
