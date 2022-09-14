import { Answer } from './answer';
import { GameStage } from './game-stage.js';
import { Player } from './player';

export interface RoomState {
  id: string;
  stage: GameStage;
  players: Record<string, Player>;
  question: string;
  answers: Answer[];
  answerIndex: number;
  round: number;
  maxRounds: number;
  wait: number;
}
