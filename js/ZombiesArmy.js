class ZombiesArmy {
  
  constructor() {
    this.ROUNDS_COMPOSITION = [
      [2, 5, 10], [5, 12, 12], [5, 7, 17, 22], [50]
    ];
    this.TIME_INTER_WAVES = 5 * FRAMERATE;
    this.TIME_INTER_ZOMBIES = 1 * FRAMERATE;
    this.round = {
      number: 0,
      wave: 0,
      waveZombie: 0,
    };
    this.zombies = [];
    this.interWaveCooldown = this.TIME_INTER_WAVES;
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
    for (const z of this.zombies) {
      z.update();
      if (z.isDead())
        this.zombies.remove(z);
    }
  }

  render() {
    for (let z of this.zombies)
      z.render();
  }

  /**
   * Summon a zombie on a random line
   * @param {array|number|undefined} lineOrLinesArray line indexes to summon the zombie on
   */
  createZombie(lineOrLinesArray) {
    let line;
    if (!isNaN(lineOrLinesArray)) {
      // Get line
      line = lineOrLinesArray
    } else if (Array.isArray(lineOrLinesArray)) {
      // Get linesArray
      line = Proba.pickUniformlyFrom(lineOrLinesArray)
    } else {
      // Ignore lineOrLinesArray
      line = Proba.pickUniformlyFrom(Array.from(Array(tilemap.SIZE_Y).keys()))
    }
    this.zombies.push(new Zombie(tilemap.SIZE_X + 1, line ));
    
    this.incrementZombieCounter();
  }

  shallCreateZombie() {
    // console.log(
    //   this.round.number,
    //   this.round.wave,
    //   this.round.waveZombie,
    // )
    // console.log(
    //   this.isLastWave() && this.isLastWaveZombie() && this.zombies.length > 0,
    //   this.isLastWave(),
    //   this.isLastWaveZombie(),
    //   this.zombies.length > 0
    // )
    return !this.hasNoMoreZombies()
      && this.interWaveCooldown == 0
      && !(this.isLastWave() && this.isLastWaveZombie() && this.zombies.length > 0)
      && frameCount % this.TIME_INTER_ZOMBIES == 0;
  }

  incrementZombieCounter() {
    if (this.isLastWaveZombie()) {
      this.round.waveZombie = -1;
      this.interWaveCooldown = this.TIME_INTER_WAVES;

      if (this.isLastWave()) {
        this.round.wave = -1;
        this.round.number++;
      }
      this.round.wave++;
    }
    this.round.waveZombie++;
  }
 
  hasNoMoreZombies() {
    return this.isLastRound() && this.zombies.isEmpty();
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
