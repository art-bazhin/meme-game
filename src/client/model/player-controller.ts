import { batch, computed } from 'spred';
import { Action } from '../../common/action';
import { ClientType } from '../../common/client-type';
import { GameStage } from '../../common/game-stage';
import { GameController } from './game-controller';

export class PlayerController extends GameController {
  private readonly answers = this._state.select('answers');
  private readonly players = this._state.select('players');

  public readonly player = computed(() => this.state().players[this.playerId]);
  public readonly cards = computed(() => this.player().cards);
  public readonly selectedCard = computed(() => {
    const answer = this.answers().find((a) => a.playerId === this.player().id);
    return answer ? answer.card : '';
  });

  constructor(roomId: string, playerId: string, playerName: string) {
    super(ClientType.Player, roomId, playerId, playerName);
  }

  public answer(card: string) {
    const state = this.state();
    if (
      !state ||
      state.error ||
      state.stage !== GameStage.Question ||
      !this.player().cards.includes(card)
    )
      return;

    batch(() => {
      const answerIndex = this.state().answers.findIndex(
        (answer) => answer.playerId === this.playerId
      );

      this._state.select('answers').update((answers) => {
        const answer = {
          playerId: this.playerId,
          card,
          votes: [],
        };

        if (answerIndex > -1) answers[answerIndex] = answer;
        else answers.push(answer);
      });

      this.makePlayerDone();
    });

    this.emitPlayerData(card);
  }

  public vote(score: 0 | 1 | 2) {
    const state = this.state();
    if (!state || state.error || state.stage !== GameStage.Vote) return;

    batch(() => {
      const answerIndex = this.state().answerIndex;
      const answer = this.state().answers[answerIndex];

      if (!answer || answer.playerId === this.playerId) return;

      const voteIndex = answer.votes.findIndex(
        (vote) => vote.playerId === this.playerId
      );

      this.answers.select(answerIndex).update('votes', (votes) => {
        const vote = {
          playerId: this.playerId,
          score,
        };

        if (voteIndex > -1) votes[voteIndex] = vote;
        else votes.push(vote);
      });

      this.makePlayerDone();
    });

    this.emitPlayerData(score);
  }

  public ready() {
    const state = this.state();
    if (!state || state.error || state.stage !== GameStage.Results) return;

    this.makePlayerDone();
    this.emitPlayerData();
  }

  private emitPlayerData(payload?: any) {
    this.emit(Action.PlayerData, payload);
  }

  private makePlayerDone() {
    this.players.update(this.playerId, (player) => {
      player.done = true;
    });
  }
}
