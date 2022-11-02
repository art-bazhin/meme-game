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
  const pending = writable(false);

  return h('div', { class: css.login }, () => {
    input({
      label: () => 'Как тебя зовут?',
      placeholder: () => 'Введи свое имя',
      model: playerName,
    });

    button({
      text: () => (pending() ? 'Загрузка...' : 'Присоединиться'),
      className: () => css.button,
      disabled: () => pending() || !playerName().length,
      onСlick: () => {
        pending(true);
        onLogin({
          name: playerName(),
          id: playerId(),
        });
      },
    });
  });
});
