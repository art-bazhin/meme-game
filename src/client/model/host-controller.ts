import { memo } from 'spred';
import { Action } from '../../common/action';
import { ClientType } from '../../common/client-type';
import { GameStage } from '../../common/game-stage';
import { GameController } from './game-controller';

export class HostController extends GameController {
  public readonly caption = memo(() => this.state().caption);

  constructor(roomId: string) {
    super(ClientType.Host, roomId);
  }

  public startGame(maxRounds = 0) {
    const state = this.state();

    if (state && state.stage === GameStage.Lobby) {
      this.emit(Action.StartGame, maxRounds);
    }
  }
}
