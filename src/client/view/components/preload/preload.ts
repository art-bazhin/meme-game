import * as css from './preload.module.scss';

import { component, h, list, templateFn } from 'spred-dom';
import { Player } from '../../../../common/player';
import { GameController } from '../../../model/game-controller';

const Card = component((card: string) => {
  return h('img', { src: () => `./img/${card}.jpg` });
});

const PlayerCards = component((player: Player) => {
  return h(() => {
    list(player.cards, Card);
  });
});

export const Preload = component((controller: GameController) => {
  return h('div', { class: css.preload }, () => {
    list(controller.playersList, PlayerCards);
  });
});

export const preload = templateFn(Preload);
