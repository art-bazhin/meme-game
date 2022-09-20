import * as css from './button.module.scss';

import { component, h, templateFn } from 'spred-dom';

interface ButtonProps {
  text: () => string;
  disabled?: () => boolean;
  onclick?: (e: MouseEvent) => any;
}

interface ButtonLinkProps extends ButtonProps {
  href: () => string;
}

export const ButtonLink = component(
  ({ href, text, disabled, onclick }: ButtonLinkProps) => {
    return h('a', {
      onclick,
      href,
      text,
      class: {
        [css.button]: true,
        [css.disabled]: disabled,
      },
    });
  }
);

export const buttonLink = templateFn(ButtonLink);

export const Button = component(({ text, disabled, onclick }: ButtonProps) => {
  return h('button', {
    onclick,
    text,
    class: {
      [css.button]: true,
      [css.disabled]: disabled,
    },
  });
});

export const button = templateFn(Button);
