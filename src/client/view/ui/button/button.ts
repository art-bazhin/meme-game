import * as css from './button.module.scss';

import { component, h, templateFn } from 'spred-dom';

interface ButtonProps {
  text: () => string;
}

interface ButtonLinkProps extends ButtonProps {
  href: () => string;
}

export const ButtonLink = component(({ href, text }: ButtonLinkProps) => {
  return h('a', { href, text, class: css.button });
});

export const buttonLink = templateFn(ButtonLink);
