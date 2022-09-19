import { computed, memo, writable } from 'spred';

const hash = writable(location.hash);
const tuple = computed(() => hash().split('/'));

window.addEventListener('hashchange', () => {
  hash(location.hash);
});

export const route = memo(() => {
  const str = tuple()[0];

  if (str === '#play') return 'PLAY';
  else if (str === '#host') return 'HOST';
  return 'MAIN';
});

export const roomId = memo(() => tuple()[1]);
