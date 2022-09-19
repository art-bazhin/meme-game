import * as css from './logo.module.scss';

import { component, h, templateFn } from 'spred-dom';

const Logo = component(() =>
  h('h1', { class: css.logo }, () => {
    h('span', { class: css.top }, () => {
      h('span', { text: 'С' });
      h('span', { text: 'О' });
      h('span', { text: 'Б' });
      h('span', { text: 'Е' });
      h('span', { text: 'Р' });
      h('span', { text: 'И' });
    });
    h('span', { class: css.bottom }, () => {
      h('span', { text: 'М' });
      h('span', { text: 'Е' });
      h('span', { text: 'М' });
    });
  })
);

const logo = templateFn(Logo);

export { Logo, logo };
