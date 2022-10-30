import * as css from './host-question.module.scss';

import { component, h } from 'spred-dom';
import { HostController } from '../../../model/host-controller';
import { stageStatus } from '../stage-status/stage-status';

export const HostQuestion = component((controller: HostController) => {
  return h(() => {
    h('h1', { text: () => 'Раунд ' + controller.round() });

    h('div', { class: css.captionWrap }, () => {
      h('p', {
        class: css.caption,
        text: () => 'Когда пишешь классную игру для себя и друзей',
      });
    });

    stageStatus(() =>
      controller
        .playersList()
        .filter((player) => player.done)
        .map(() => '💡')
        .join(' ')
    );
  });
});
