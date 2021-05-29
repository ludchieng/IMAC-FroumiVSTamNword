class ZombiesCounter {
  
  constructor(onNextRound, onNextWave, onNextGroup) {
    this.ROUNDS_COMPOSITION = [
      [2, 3], [3, 2, 2, 2], [7, 10], [5, 7], [8, 9], [7, 10], [7, 12], [5, 5], [8, 8], [7, 3, 9],
      [10, 12], [9, 11, 5, 15, 5, 20], [1, 1, 1, 30], [6, 5, 13, 20], [50, 50], [60, 1, 1, 1, 60],
    ];
    this.indices = {
      round: 0,
      wave: 0,   // wave number of the current round
      group: 0, // group number of the current wave
    };
    this.onNextRound = onNextRound;
    this.onNextWave = onNextWave;
    this.onNextGroup = onNextGroup;
  }

  roundNumber() {
    return this.indices.round + 1; // because it starts at 0
  }
  waveNumber() {
    return this.indices.wave + 1; // because it starts at 0
  }
  groupNumber() {
    return this.indices.group + 1; // because it starts at 0
  }

  roundExpectedCount() {
    return this.ROUNDS_COMPOSITION.length;
  }
  waveExpectedCount() {
    return this.ROUNDS_COMPOSITION[this.indices.round].length;
  }
  groupExpectedCount() {
    return this.ROUNDS_COMPOSITION[this.indices.round][this.indices.wave];
  }

  hasNext() {
    return this.indices.round !== this.roundExpectedCount();
  }

  next() {
    if (!this.hasNext())
      return 0;
    this.increment();
    return 0;
  }

  increment() {
    this.indices.group++;
    if (this.onNextGroup)
      this.onNextGroup();

    if (this.indices.group === this.groupExpectedCount()) {
      this.indices.group = 0;
      this.indices.wave++;
      if (this.onNextWave)
        this.onNextWave();
    }
    if (this.indices.wave === this.waveExpectedCount()) {
      this.indices.wave = 0;
      this.indices.round++;
      if (this.onNextRound)
        this.onNextRound();
    }
  }
}
