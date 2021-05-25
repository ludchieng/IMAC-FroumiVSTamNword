class ZombiesCounter {
  
  constructor(onNextRound, onNextWave, onNextZombie) {
    this.ROUNDS_COMPOSITION = [
      [1000000, 2, 5, 7, 10], [20, 50, 50], [50, 70, 120, 150], [200]
    ];
    this.indices = {
      round: 0,
      wave: 0,   // wave number of the current round
      zombie: 0, // zombie number of the current wave
    };
    this.onNextRound = onNextRound;
    this.onNextWave = onNextWave;
    this.onNextZombie = onNextZombie;
  }

  roundNumber() {
    return this.indices.round + 1; // because it starts at 0
  }
  waveNumber() {
    return this.indices.wave + 1; // because it starts at 0
  }
  zombieNumber() {
    return this.indices.zombie + 1; // because it starts at 0
  }

  roundExpectedCount() {
    return this.ROUNDS_COMPOSITION.length;
  }
  waveExpectedCount() {
    return this.ROUNDS_COMPOSITION[this.indices.round].length;
  }
  zombieExpectedCount() {
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

    this.indices.zombie++;
    if (this.onNextZombie)
      this.onNextZombie();

    if (this.indices.zombie === this.zombieExpectedCount()) {
      this.indices.zombie = 0;
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
    //console.log("ZCounter", this.indices);
  }
}
