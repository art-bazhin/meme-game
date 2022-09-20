import { computed, writable } from 'spred';

export function withLocalStorage(key: string, getInitialValue: () => string) {
  let value = '';

  try {
    value = localStorage.getItem(key) || getInitialValue();
  } catch {
    value = getInitialValue();
  }

  const signal = writable(value);
  const derived = computed(signal);

  derived.subscribe((value) => {
    try {
      localStorage.setItem(key, value);
    } catch {}
  });

  return signal;
}
