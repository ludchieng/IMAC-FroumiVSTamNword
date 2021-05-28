class Sunflower extends Plant {

  constructor(i, j) {
    super(i,j,50,150);
    this.GAIN = 50;
    
    this.sprite.addImage(TEX.SUNFLOWER);

    this.gainTrigger = new Trigger(
      () => (
        Proba.normalDriven(
          27 * FRAMERATE,
          5 * FRAMERATE,
          19 * FRAMERATE,
          35 * FRAMERATE)
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
