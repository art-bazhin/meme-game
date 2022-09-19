import * as css from './loading-screen.module.scss';

import { component, h } from 'spred-dom';

export const LoadingScreen = component(() =>
  h('div', { class: css.loading }, () => {
    h('h1', () => {
      h('span', { text: 'Загрузка' });
      h('span', { class: css.dot1, text: '.' });
      h('span', { class: css.dot2, text: '.' });
      h('span', { class: css.dot3, text: '.' });
    });
  })
);
