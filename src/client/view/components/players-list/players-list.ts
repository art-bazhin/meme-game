import * as css from './players-list.module.scss';

import { component, h, templateFn } from 'spred-dom';
import { Player } from '../../../../common/player';
import { computed } from 'spred';

interface PlayersListProps {
  players: () => Player[];
}

export const PlayersList = component(({ players }: PlayersListProps) => {
  const hasNoPlayers = computed(() => !players().length);

  const text = computed(() => {
    if (hasNoPlayers()) return 'Пока что никто не\u00A0подключился';
    return players()
      .map((player) => player.name)
      .join(', ');
  });

  return h(
    'div',
    {
      class: {
        [css.playersList]: true,
        [css.noPlayers]: hasNoPlayers,
      },
      text,
    },
    () => {}
  );
});

export const playersList = templateFn(PlayersList);
