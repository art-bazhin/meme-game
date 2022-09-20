import * as css from './host-question.module.scss';

import { component, h } from 'spred-dom';
import { HostController } from '../../../model/host-controller';

export const HostQuestion = component((controller: HostController) => {
  return h(() => {
    h('h1', { text: () => 'Раунд ' + controller.round() });

    h('div', { class: css.captionWrap }, () => {
      h('p', { class: css.caption, text: controller.caption });
    });

    h('div', { class: css.playersDone });
  });
});
