class ZombiesArmy {
  
  constructor() {
    this.TIME_INTER_WAVES = 5 * FRAMERATE;
    this.TIME_INTER_ZOMBIES = 1 * FRAMERATE;
    this.STATES = { STANDBY: -1, INTERZOMBIE:0, INTERWAVE:1, INTERROUND:2 }

    this.state = this.STATES.STANDBY;
    this.zombies = [];
    //this.summonerTrigger = this.createSummoner();

    this.cooldown = this.createCooldownstandby();
    this.zCounter = new ZombiesCounter(() => {
      // onNextRound
      this.state = this.STATES.INTERROUND;
      this.cooldown = this.createCooldownRound();
    },() => {
      // onNextWave
      this.state = this.STATES.INTERWAVE;
      this.cooldown = this.createCooldownWave();
    });
  }

  createCooldownstandby() {
    return 2 * FRAMERATE;
  }

  createCooldownZombie() {
    return Proba.poissonDriven(2 * FRAMERATE, 0.1 * FRAMERATE, 5 * FRAMERATE, 0.1 * FRAMERATE);
  }

  createCooldownWave() {
    return Proba.poissonDriven(8 * FRAMERATE, 7 * FRAMERATE, 20 * FRAMERATE, 7 * FRAMERATE);
  }

  createCooldownRound() {
    return Proba.poissonDriven(5 * FRAMERATE, 4 * FRAMERATE, 22 * FRAMERATE, 4 * FRAMERATE);
  }

  update() {
    switch (this.state) {
      case this.STATES.STANDBY:
        if (this.cooldown-- <= 0) {
          this.state = this.STATES.INTERZOMBIE;
          console.log('if standby', this.state, this.cooldown)
        }
        break;

      case this.STATES.INTERZOMBIE:
        if (this.cooldown-- <= 0 && this.zCounter.hasNext()) {
          this.summonZombie();
          this.cooldown = this.createCooldownZombie();
          this.zCounter.increment();
          console.log('next zombie in', this.cooldown, 'frames')
        }
        break;

      case this.STATES.INTERWAVE:
        if (this.cooldown-- <= 0)
          this.state = this.STATES.INTERZOMBIE;
        break;

      case this.STATES.INTERROUND:
        if (this.cooldown-- <= 0 && this.zombies.length === 0)
          this.state = this.STATES.INTERZOMBIE;
        break;
    }
    
    // Update zombies
    for (const z of this.zombies) {
      z.update();
      if (z.isDead())
        this.zombies.remove(z);
    }
  }

  render() {
    for (const z of this.zombies)
      z.render();
  }

  /**
   * Summon a zombie on a random line
   * @param {array|number|undefined} lineOrLinesArray line indexes to summon the zombie on
   */
  summonZombie(lineOrLinesArray) {
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
    // this.incrementZombieCounter();
  }

}
