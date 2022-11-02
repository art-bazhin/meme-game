import * as css from './button.module.scss';

import { component, h, templateFn } from 'spred-dom';

interface ButtonProps {
  text: () => string;
  disabled?: () => boolean;
  onСlick?: (e: MouseEvent) => any;
  className?: () => string;
}

interface ButtonLinkProps extends ButtonProps {
  href: () => string;
}

export const ButtonLink = component(
  ({ href, text, disabled, onСlick: onclick }: ButtonLinkProps) => {
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

export const Button = component((props: ButtonProps) => {
  const { text, disabled, onСlick, className } = props;

  return h('button', {
    onclick: onСlick,
    text,
    class: [
      {
        [css.button]: true,
        [css.disabled]: disabled,
      },
      className,
    ],
  });
});

export const button = templateFn(Button);
