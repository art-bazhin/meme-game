import * as css from './input.module.scss';

import { component, h, templateFn } from 'spred-dom';
import { WritableSignal } from 'spred';

interface InputProps {
  label?: () => string;
  placeholder?: () => string;
  model?: WritableSignal<string>;
}

export const Input = component((props: InputProps) => {
  const { label, placeholder, model } = props;

  return h('label', { class: css.wrap }, () => {
    h('span', { text: label, class: css.label });
    h('input', {
      type: 'text',
      class: css.input,
      placeholder: placeholder || '',
      value: model || '',
      oninput: model && ((e: any) => model(e.target.value)),
    });
  });
});

export const input = templateFn(Input);
