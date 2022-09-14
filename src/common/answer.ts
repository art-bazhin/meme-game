import { Vote } from './vote';

export interface Answer {
  playerId: string;
  card: string;
  votes: Vote[];
}
