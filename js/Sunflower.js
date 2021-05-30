class Sunflower extends Plant {

  constructor(i, j) {
    super(i,j,50,150);
    this.GAIN = 50;
    
    this.sprite.addImage(TEX.SUNFLOWER);

    this.gainTrigger = new Trigger(
      () => {
        let res = Proba.normalDriven(
          27 * FRAMERATE / config.sunflowerGainSpeed,
          2 * FRAMERATE / config.sunflowerGainSpeed,
          19 * FRAMERATE / config.sunflowerGainSpeed,
          35 * FRAMERATE / config.sunflowerGainSpeed);
          
        const x = (res / FRAMERATE).toFixed(0);
        let s = stats.sunflowerGainDuration;
        (s[x]) ? s[x]++ : s[x] = 1;
        return res;
      },
      () => {
        // Give money to player
        if(this.isDead())
          return;
        player.balance += this.GAIN;
        orphansManager.addOrphan(new SpriteText(
          this.sprite.position.x + Proba.normalDriven(0,7,-8,8),
          this.sprite.position.y,
          '+'+this.GAIN)
        );
      }
    );
  }

  getWeight() {
      return 10;
  }

  update() {
    super.update();
    this.gainTrigger.update();
  }
  
}
