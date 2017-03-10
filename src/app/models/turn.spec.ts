import { Turn, GuessOption } from './turn';

describe('Turn', () => {
  it('when new has four empty guesses', () => {
    let turn = new Turn();

    for (let i = 0; i < 4; i += 1) {
      expect(turn.guessColor(i)).toBeUndefined();
    }
  });

  it('when new has four empty results', () => {
    let turn = new Turn();

    for (let i = 0; i < 4; i += 1) {
      expect(turn.resultColor(i)).toBeUndefined();
    }
  });

  it('will record my guesses', () => {
    let guesses: GuessOption[] = [
      <GuessOption>Math.floor(Math.random() * 6),
      <GuessOption>Math.floor(Math.random() * 6),
      <GuessOption>Math.floor(Math.random() * 6),
      <GuessOption>Math.floor(Math.random() * 6),
      <GuessOption>Math.floor(Math.random() * 6),
      <GuessOption>Math.floor(Math.random() * 6),
      <GuessOption>Math.floor(Math.random() * 6),
      <GuessOption>Math.floor(Math.random() * 6)
    ];
    let turn = new Turn();

    for (let i = 0; i < 8; i += 1) {
      let guess = guesses[i];
      let guessIndex = i % 4;
      turn.guess(guessIndex, guess);
      expect(turn.guessColor(guessIndex)).toBe(guess);
    }
  });

  it('will not complete with empty guesses', () => {
    let guesses = [
      { space: 0, order: Math.random(), guess: GuessOption.Red },
      { space: 1, order: Math.random(), guess: GuessOption.Red },
      { space: 2, order: Math.random(), guess: GuessOption.Red },
      { space: 3, order: Math.random(), guess: GuessOption.Red }
    ];
    guesses.sort((a, b) => a.order < b.order ? -1 : a.order < b.order ? 1 : 0);
    let turn = new Turn();

    for (let guess of guesses) {
      expect(turn.complete).toBe(false);
      turn.guess(guess.space, guess.guess);
      turn.finalize();
    }
    expect(turn.complete).toBe(true);
  });

  it('will not allow moves after finalization', () => {
    let turn = new Turn();
    [0, 1, 2, 3].forEach(n => turn.guess(n, GuessOption.Red));
    turn.finalize();

    turn.guess(1, GuessOption.White);

    expect(turn.guessColor(1)).toBe(GuessOption.Red);
  });
});
