export enum GuessOption {
  Orange,
  White,
  Green,
  Red,
  Purple,
  Black
}

export enum ResultOption {
  Black,
  White
}

export class Guess {
  public color: GuessOption;
}

export class Result {
  public color: ResultOption;
}

export class Turn {
  private guesses: Guess[];
  private results: Result[];
  private finalized: boolean;

  constructor() {
    this.guesses = emptyGuesses();
    this.results = emptyResults();
    this.finalized = false;
  }

  public guessColor(index: number): GuessOption {
    return this.guesses[index].color;
  }

  public resultColor(index: number): ResultOption {
    return this.results[index].color;
  }

  public guess(index: number, guess: GuessOption): void {
    if (!this.finalized) {
      this.guesses[index].color = guess;
    }
  }

  public get complete(): boolean {
    return this.finalized;
  }

  public finalize(): void {
    this.finalized = this.finalized ||
                     this.guesses.every(g => {
                       return g.color !== undefined;
                     });
  }
}

function emptyGuesses(): Guess[] {
  return [
    emptyGuess(),
    emptyGuess(),
    emptyGuess(),
    emptyGuess()
  ];
}

function emptyGuess(): Guess {
  return {
    color: undefined
  };
}

function emptyResults(): Result[] {
  return [
    emptyResult(),
    emptyResult(),
    emptyResult(),
    emptyResult()
  ];
}

function emptyResult(): Result {
  return {
    color: undefined
  };
}
