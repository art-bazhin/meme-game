import * as css from './stage-status.module.scss';

import { component, h, templateFn } from 'spred-dom';

export const StageStatus = component((statusString: () => string) =>
  h('div', { class: css.stageStatus, text: statusString })
);

export const stageStatus = templateFn(StageStatus);
