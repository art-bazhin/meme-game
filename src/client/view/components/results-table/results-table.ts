import * as css from './results-table.module.scss';

import { computed } from 'spred';
import { component, h, list, templateFn } from 'spred-dom';
import { Player } from '../../../../common/player';
import { PlayerStatus } from '../../../../common/player-status';

const TableRow = component((player: Player) => {
  const emoji = () => {
    switch (player.status) {
      case PlayerStatus.Offline:
        return '👻';
      case PlayerStatus.Pending:
        return '⏳';
      default:
        return player.done ? '✔' : '';
    }
  };

  return h('tr', () => {
    h('td', { text: () => `${player.name} ${emoji()}` });
    h('td', { text: () => player.score + '' });
  });
});

export const ResultsTable = component((players: () => Player[]) => {
  const sortedPlayers = computed(() => {
    const res = players().slice();

    res.sort((a, b) => b.score - a.score);
    return res;
  });

  return h('table', { class: css.resultsTable }, () => {
    list(sortedPlayers, TableRow);
  });
});

export const resultsTable = templateFn(ResultsTable);
