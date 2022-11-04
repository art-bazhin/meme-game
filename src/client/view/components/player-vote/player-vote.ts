import * as css from './player-vote.module.scss';

import { component, h } from 'spred-dom';
import { PlayerController } from '../../../model/player-controller';

export const PlayerVote = component((controller: PlayerController) => {
  const vote = controller.playerVote;

  return h('div', { class: css.container }, () => {
    h('div', { class: css.buttons }, () => {
      h('button', {
        class: {
          [css.button]: true,
          [css.selected]: () => vote() && vote()!.score === 0,
        },
        onclick: () => controller.vote(0),
        text: '😐',
      });
      h('button', {
        class: {
          [css.button]: true,
          [css.selected]: () => vote() && vote()!.score === 1,
        },
        onclick: () => controller.vote(1),
        text: '😁',
      });
      h('button', {
        class: {
          [css.button]: true,
          [css.selected]: () => vote() && vote()!.score === 2,
        },
        onclick: () => controller.vote(2),
        text: '🤣',
      });
    });
  });
});
