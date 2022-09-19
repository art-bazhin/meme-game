import { component, h, node } from 'spred-dom';
import { route } from '../model/routing';
import { HostView } from './host-view/host-view';
import { MainView } from './main-view/main-view';
import { PlayerView } from './player-view/player-view';

export const App = component(() => {
  return h(() => {
    node(() => {
      switch (route()) {
        case 'HOST':
          return HostView();

        case 'PLAY':
          return PlayerView();

        default:
          return MainView();
      }
    });
  });
});
