class ZombiesCounter {
  
  constructor() {
    this.ROUNDS_COMPOSITION = [
      [2, 5, 10], [5, 12, 12], [5, 7, 17, 22], [50]
    ];
    this.indices = {
      round: 0,
      wave: 0,   // wave number of the current round
      zombie: 0, // zombie number of the current wave
    };
  }

  roundNumber() {
    return this.count.round + 1; // because it starts at 0
  }
  waveNumber() {
    return this.count.wave + 1; // because it starts at 0
  }
  zombieNumber() {
    return this.count.zombie + 1; // because it starts at 0
  }

  roundExpectedCount() {
    return this.ROUNDS_COMPOSITION.length;
  }
  waveExpectedCount() {
    return this.ROUNDS_COMPOSITION[this.indices.round].length;
  }
  zombieExpectedCount() {
    return this.ROUNDS_COMPOSITION[this.indices.round][this.indices.zombie];
  }

  increment() {
    if (this.indices.zombie === this.zombieExpectedCount()) {
      this.count.zombie = 0;
      this.count.wave++;
    }
    if (this.indices.wave === this.waveExpectedCount()) {
      this.count.wave = 0;
      this.count.round++;
    }
    console.log("ZCounter", this.indices);
  }
}
