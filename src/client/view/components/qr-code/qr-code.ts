import * as css from './qr-code.module.scss';

import { component, h, templateFn } from 'spred-dom';
import { QRC, toSvgString } from '../../../../vendor/qrcode';
import { computed, on, writable } from 'spred';

interface QRCodeProps {
  text: () => string;
}

export const QRCode = component(({ text }: QRCodeProps) => {
  const container = writable<HTMLDivElement>();
  const textSignal = computed(text);
  const comboSignal = computed(() => [container(), textSignal()] as const);

  on(comboSignal, (tuple) => {
    const qr = QRC.encodeText(tuple[1], QRC.Ecc.MEDIUM);
    const svg = toSvgString(qr, 0);

    tuple[0]!.innerHTML = svg;
  });

  return h('div', { class: css.qrCode, ref: container });
});

export const qrCode = templateFn(QRCode);
