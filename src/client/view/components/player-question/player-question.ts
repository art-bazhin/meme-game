import * as css from './player-question.module.scss';

import { component, h, list } from 'spred-dom';
import { PlayerController } from '../../../model/player-controller';
import { batch, computed, writable, WritableSignal } from 'spred';
import { CARDS_PER_PLAYER } from '../../../../common/constants';
import { withLocalStorage } from '../../../lib/with-local-storage';

const DOUBLETAP_DURATION = 500;
const SWIPE_DURATION = 200;
const MIN_OFFSET = 30;

const Picture = component((props: { id: string; selected: () => boolean }) => {
  return h(
    'div',
    {
      class: {
        [css.picture]: true,
        [css.selected]: props.selected,
      },
      attrs: {
        style: () => `background-image: url("/img/${props.id}.jpg")`,
      },
    },
    () => h('div', { class: css.overlay })
  );
});

export const PlayerQuestion = component((controller: PlayerController) => {
  const currentIndexSource = withLocalStorage(
    'CARD_INDEX',
    () => '0'
  ) as WritableSignal<number | string>;

  const currentIndex = computed(() => +currentIndexSource());
  const next = writable(0);

  const displayed = computed(() => {
    const cur =
      (CARDS_PER_PLAYER + (currentIndex() % CARDS_PER_PLAYER)) %
      CARDS_PER_PLAYER;
    const prev = (CARDS_PER_PLAYER + cur - 1) % CARDS_PER_PLAYER;
    const next = (cur + 1) % CARDS_PER_PLAYER;
    const cards = controller.cards();

    return [cards[next], cards[cur], cards[prev]];
  });

  const currentCard = computed(() => displayed()[1]);

  const lastTapTimestamp = writable(0);
  const noTransition = writable(false);
  const touchActive = writable(false);
  const touchStart = writable(0);
  const touchEnd = writable(0);

  const offset = computed(() => touchEnd() - touchStart());
  const style = computed(() => {
    const transition = `transition: transform ${SWIPE_DURATION}ms ease-in-out`;

    if (noTransition()) return null;
    if (next() === -1) return `transform: translateX(-100vw); ${transition}`;
    if (next() === 1) return `transform: translateX(100vw); ${transition}`;

    return touchActive() ? `transform: translateX(${offset()}px)` : transition;
  });

  function start(e: TouchEvent) {
    const ts = Date.now();

    if (ts - lastTapTimestamp() < DOUBLETAP_DURATION) {
      controller.answer(currentCard());
    }

    lastTapTimestamp(ts);

    if (next()) return;

    touchActive(true);
    touchStart(e.touches[0].clientX);
    touchEnd(e.touches[0].clientX);
  }

  function move(e: TouchEvent) {
    touchEnd(e.touches[0].clientX);
  }

  function end() {
    batch(() => {
      touchActive(false);
      if (Math.abs(offset()) < MIN_OFFSET) return;
      if (offset() < 0) next(-1);
      if (offset() > 0) next(1);
    });

    setTimeout(() => {
      batch(() => {
        currentIndexSource(currentIndex() + next());
        next(0);
        noTransition(true);
        setTimeout(() => noTransition(false), 30);
      });
    }, SWIPE_DURATION);
  }

  return h(
    'div',
    {
      class: css.container,
      ontouchstart: start,
      ontouchmove: move,
      ontouchend: end,
      ontouchcancel: end,
      ondblclick: () => {
        controller.answer(currentCard());
      },
    },
    () => {
      h(
        'div',
        {
          class: css.pictures,
          attrs: { style },
        },
        () => {
          list(displayed, (id) =>
            Picture({
              id,
              selected: () => controller.selectedCard() === id,
            })
          );
        }
      );
    }
  );
});
