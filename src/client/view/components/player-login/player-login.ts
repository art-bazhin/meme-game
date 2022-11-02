import * as css from './player-login.module.scss';

import { component, h } from 'spred-dom';
import { nanoid } from 'nanoid';
import { withLocalStorage } from '../../../lib/with-local-storage';
import { input } from '../input/input';
import { button } from '../button/button';
import { writable } from 'spred';

interface PlayerLoginProps {
  onLogin: (opts: { name: string; id: string }) => any;
}

export const PlayerLogin = component(({ onLogin }: PlayerLoginProps) => {
  const playerId = withLocalStorage('PLAYER_ID', nanoid);
  const playerName = withLocalStorage('PLAYER_NAME', () => '');

  return h('div', { class: css.login }, () => {
    input({
      label: () => 'Как тебя зовут?',
      placeholder: () => 'Введи свое имя',
      model: playerName,
    });

    button({
      text: () => 'Присоединиться',
      className: () => css.button,
      disabled: () => !playerName().length,
      onСlick: () => {
        onLogin({
          name: playerName(),
          id: playerId(),
        });
      },
    });
  });
});
