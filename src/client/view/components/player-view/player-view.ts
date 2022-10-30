import { nanoid } from 'nanoid';
import { computed } from 'spred';
import { component, h, node } from 'spred-dom';
import { GameStage } from '../../../../common/game-stage';
import { withLocalStorage } from '../../../lib/with-local-storage';
import { PlayerController } from '../../../model/player-controller';
import { roomId } from '../../../model/routing';
import { button } from '../button/button';

export const PlayerView = component(() => {
  const playerId = withLocalStorage('PLAYER_ID', nanoid);
  const playerName = withLocalStorage(
    'PLAYER_NAME',
    () => 'player_' + nanoid().substring(0, 4)
  );

  const controllerSignal = computed(
    () => new PlayerController(roomId(), playerId(), playerName())
  );
  const state = computed(() => controllerSignal().state());

  (window as any).controller = controllerSignal();

  return h('div', () => {
    const controller = controllerSignal();

    node(() => {
      switch (controller.stage()) {
        case GameStage.Lobby:
          return null;

        case GameStage.Question:
          return QuestionTemp(controller);

        case GameStage.Vote:
          const state = controller.state();
          if (
            controller.player().id === state.answers[state.answerIndex].playerId
          )
            return null;
          return VoteTemp(controller);

        case GameStage.Results:
          return ResultsTemp(controller);
      }

      return null;
    });
  });
});

const ResultsTemp = component((controller: PlayerController) => {
  return h('div', () => {
    button({ text: () => 'Ready', onclick: () => controller.ready() });
  });
});

const QuestionTemp = component((controller: PlayerController) => {
  return h('div', () => {
    button({
      text: () => controller.player().cards[0],
      onclick: () => controller.answer(controller.player().cards[0]),
    });

    button({
      text: () => controller.player().cards[1],
      onclick: () => controller.answer(controller.player().cards[1]),
    });

    button({
      text: () => controller.player().cards[2],
      onclick: () => controller.answer(controller.player().cards[2]),
    });

    button({
      text: () => controller.player().cards[3],
      onclick: () => controller.answer(controller.player().cards[3]),
    });

    button({
      text: () => controller.player().cards[4],
      onclick: () => controller.answer(controller.player().cards[4]),
    });
  });
});

const VoteTemp = component((controller: PlayerController) => {
  return h('div', () => {
    button({
      text: () => '0',
      onclick: () => controller.vote(0),
    });

    button({
      text: () => '1',
      onclick: () => controller.vote(1),
    });

    button({
      text: () => '2',
      onclick: () => controller.vote(2),
    });
  });
});
