import * as css from './host-results.module.scss';

import { component, h } from 'spred-dom';
import { HostController } from '../../../model/host-controller';
import { resultsTable } from '../results-table/results-table';

export const HostResults = component((controller: HostController) => {
  return h(() => {
    h('h1', { text: 'Результаты' });

    h('div', { class: css.tableWrap }, () => {
      resultsTable(controller.playersList);
    });
  });
});
