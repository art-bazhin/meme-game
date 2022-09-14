import { PlayerStatus } from './player-status.js';

export interface Player {
  id: string;
  name: string;
  cards: string[];
  score: number;
  status: PlayerStatus;
  done: boolean;
}
