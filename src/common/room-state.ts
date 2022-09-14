import { Answer } from './answer';
import { GameStage } from './game-stage.js';
import { Player } from './player';
import { RoomError } from './room-error';

export interface RoomState {
  id: string;
  stage: GameStage;
  players: Record<string, Player>;
  caption: string;
  answers: Answer[];
  answerIndex: number;
  round: number;
  maxRounds: number;
  wait: number;
  error?: RoomError;
  loading?: boolean;
}
