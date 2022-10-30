import { computed, writable } from 'spred';

const PLAY_HASH = '#play';
const HOST_HASH = '#host';
const DELIMITER = '/';

const hash = writable(location.hash);
const tuple = computed(() => hash().split(DELIMITER));

window.addEventListener('hashchange', () => {
  hash(location.hash);
});

export const route = computed(() => {
  const str = tuple()[0];

  if (str === PLAY_HASH) return 'PLAY';
  else if (str === HOST_HASH) return 'HOST';
  return 'MAIN';
});

export const roomId = computed(() => tuple()[1]);

export function getPlayLink(roomId: string) {
  return location.origin + '/' + PLAY_HASH + DELIMITER + roomId;
}
