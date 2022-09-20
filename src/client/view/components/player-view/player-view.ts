import { nanoid } from 'nanoid';
import { computed } from 'spred';
import { component, h } from 'spred-dom';
import { withLocalStorage } from '../../../lib/with-local-storage';
import { PlayerController } from '../../../model/player-controller';
import { roomId } from '../../../model/routing';

export const PlayerView = component(() => {
  const playerId = withLocalStorage('PLAYER_ID', nanoid);
  const playerName = withLocalStorage(
    'PLAYER_NAME',
    () => 'player_' + nanoid().substring(0, 4)
  );

  const controllerSignal = computed(
    () => new PlayerController(roomId(), playerId(), playerName())
  );
  const state = computed(() => controllerSignal().state());

  (window as any).controller = controllerSignal();

  return h('div');
});
