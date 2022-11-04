import * as css from './player-results.module.scss';

import { component, h } from 'spred-dom';
import { PlayerController } from '../../../model/player-controller';
import { resultsTable } from '../results-table/results-table';
import { button } from '../button/button';

export const PlayerResults = component((controller: PlayerController) => {
  return h('div', { class: css.container }, () => {
    h('div', () => {
      h('h1', { text: 'Результаты' });
      resultsTable(controller.playersList);
    });

    button({
      text: () => 'Продолжить',
      onСlick: () => controller.ready(),
    });
  });
});
