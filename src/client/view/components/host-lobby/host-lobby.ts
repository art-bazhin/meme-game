import { component, h, node } from 'spred-dom';

const Lobby = component(() => {
  return h(() => {
    h('h1', { text: 'Новая Игра' });
  });
});

export const HostLobby = component(() => {
  return h(() => {
    h('h1', { text: 'Новая Игра' });
  });
});
