class Sunflower extends Plant {

  constructor(i, j) {
    super(i,j,50,150);
    this.GAIN = 50;
    
    this.sprite.addImage(TEX.SUNFLOWER);

    this.gainTrigger = new Trigger(
      () => (
        Proba.normalDriven(
          27 * FRAMERATE / config.sunflowerGainSpeed,
          5 * FRAMERATE / config.sunflowerGainSpeed,
          19 * FRAMERATE / config.sunflowerGainSpeed,
          35 * FRAMERATE / config.sunflowerGainSpeed)
      ),
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
