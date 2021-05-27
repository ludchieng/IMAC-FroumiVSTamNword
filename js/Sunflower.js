class Sunflower extends Plant {

  constructor(i, j) {
    super(i,j,50,150);
    this.GAIN = 50;
    
    this.sprite.addImage(TEX.SUNFLOWER);

    this.gainTrigger = new Trigger(
      () => (
        Proba.poissonDriven(
          30 * FRAMERATE,
          1 * FRAMERATE,
          40 * FRAMERATE,
          1 * FRAMERATE)
      ),
      () => {
        // Give money to player
        if(this.isDead())
          return;
        player.balance += this.GAIN;
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
