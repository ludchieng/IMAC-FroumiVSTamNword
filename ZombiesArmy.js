class ZombiesArmy {
  
  constructor() {
    this.ROUNDS_COMPOSITION = [
      [2, 5, 10], [5, 12, 12], [5, 7, 17, 22], [50]
    ];
    this.TIME_INTER_WAVE = 20;
    this.round = {
      number: 0,
      wave: 0,
      waveZombie: 0,
    };
    this.zombies = [];
    this.interWaveCooldown = this.TIME_INTER_WAVE;
    this.hasNoMoreZombies = false;
  }

  update() {
    // Check for inter wave
    if (this.interWaveCooldown > 0) {
      this.interWaveCooldown--;
    } else {
      // Check for zombie to create
      if (this.round.number >= 0 && this.shallCreateZombie()) {
        this.createZombie();
      }
    }
    
    // Update zombies
    for (let i = 0; i < this.zombies.length; ) {
      this.zombies[i].update();
      if (this.zombies[i].isDead)
        this.zombies.splice(i, 1)
      else
        i++
    }

    // Check for end
    if (this.isLastRound() && this.zombies.length > 0) {
      this.hasNoMoreZombies = true;
    }
  }

  render() {
    for (let z of this.zombies)
      z.render();
  }

  createZombie(linesArray) {
    let line;
    if (!isNaN(linesArray)) {
      line = linesArray
    } else if (Array.isArray(linesArray)) {
      line = Proba.pickUniformlyFrom(linesArray)
    } else {
      line = Proba.pickUniformlyFrom(Array.from(Array(tilemap.SIZE_Y).keys()))
    }
    this.zombies.push(new Zombie(tilemap.SIZE_X + 1, line ));
    
    this.incrementZombieCounter();
  }

  shallCreateZombie() {
    console.log(
      this.round.number,
      this.round.wave,
      this.round.waveZombie,
    )
    console.log(
      this.isLastWave() && this.isLastWaveZombie() && this.zombies.length > 0,
      this.isLastWave(),
      this.isLastWaveZombie(),
      this.zombies.length > 0
    )
    return !this.hasNoMoreZombies
      && this.interWaveCooldown == 0
      && !(this.isLastWave() && this.isLastWaveZombie() && this.zombies.length > 0)
      && frameCount % 1 == 0;
  }

  incrementZombieCounter() {
    if (this.isLastWaveZombie()) {
      this.round.waveZombie = -1;
      this.interWaveCooldown = this.TIME_INTER_WAVE;

      if (this.isLastWave()) {
        this.round.wave = -1;
        this.round.number++;
      }
      this.round.wave++;
    }
    this.round.waveZombie++;
  }

  isLastWaveZombie() {
    if (this.round.number < this.ROUNDS_COMPOSITION.length)
      if (this.round.wave < this.ROUNDS_COMPOSITION[this.round.number].length)
        return this.round.waveZombie >= this.ROUNDS_COMPOSITION[this.round.number][this.round.wave]-1
    return false;
  }

  isLastWave() {
    if (this.round.number < this.ROUNDS_COMPOSITION.length)
      return this.round.wave >= this.ROUNDS_COMPOSITION[this.round.number].length-1;
    return false;
  }

  isLastRound() {
    return this.round.number >= this.ROUNDS_COMPOSITION.length;
  }
}
