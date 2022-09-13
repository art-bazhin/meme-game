import { Answer } from './answer';
import { Player } from './player';
import { Stage } from './stage';

export interface RoomState {
  id: string;
  stage: Stage;
  players: Record<string, Player>;
  question: string;
  answers: Answer[];
  answerIndex: number;
}
