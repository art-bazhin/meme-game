import * as css from './host-lobby.module.scss';

import { component, h } from 'spred-dom';
import { qrCode } from '../qr-code/qr-code';
import { HostController } from '../../../model/host-controller';
import { playersList } from '../players-list/players-list';
import { button } from '../../ui/button/button';

export const HostLobby = component((controller: HostController) => {
  return h(() => {
    h('h1', { text: 'Ожидаем Игроков' });

    h('div', { class: css.rowWrap }, () => {
      h('div', { class: css.row }, () => {
        h('div', { class: [css.qrc, css.col] }, () => {
          qrCode({ text: controller.playLink });
        });

        h('div', { class: [css.col, css.infoCol] }, () => {
          playersList({ players: controller.playersList });

          h('div', { class: css.buttonWrap }, () => {
            button({
              text: () =>
                controller.pending() ? 'Начинаем...' : 'Начать Игру',
              disabled: () =>
                controller.gameStartBlocked() || controller.pending(),
              onclick: () => controller.startGame(),
            });
          });
        });
      });
    });
  });
});
