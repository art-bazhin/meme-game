import * as css from './main-view.module.scss';

import { component, h } from 'spred-dom';
import { logo } from '../logo/logo';
import { startLink } from '../start-link/start-link';

export const MainView = component(() =>
  h('div', { class: css.container }, () => {
    logo();

    h('div', { class: css.menu }, () => {
      startLink();
    });
  })
);
