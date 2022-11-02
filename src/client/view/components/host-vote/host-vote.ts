import * as css from './host-vote.module.scss';

import { component, h } from 'spred-dom';
import { HostController } from '../../../model/host-controller';
import { stageStatus } from '../stage-status/stage-status';

export const HostVote = component((controller: HostController) => {
  return h(() => {
    h('h1', { text: 'Голосование' });

    h('div', { class: css.card }, () => {
      h('div', {
        class: css.img,
        attrs: {
          style: () =>
            `background-image: url("/img/${controller.votedCard()}.jpg")`,
        },
      });

      h('p', {
        class: css.caption,
        text: 'Когда пишешь классную игру для себя и друзей',
      });
    });

    stageStatus(() =>
      controller
        .votes()
        .map((vote) => {
          switch (vote.score) {
            case 0:
              return '😐';
            case 1:
              return '😁';
            case 2:
              return '🤣';
          }
        })
        .join(' ')
    );
  });
});
