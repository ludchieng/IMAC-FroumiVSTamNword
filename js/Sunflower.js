class Sunflower extends Plant {

  constructor(i, j) {
    super(i,j,50,150);
    this.GAIN = 50;

    this.sprite.addImage(loadImage('assets/sunflower.png'));

    this.gainTrigger = new PoissonDrivenTrigger(
      30 * FRAMERATE,
      1 * FRAMERATE,
      40 * FRAMERATE,
      1 * FRAMERATE,
      () => {
        // Give money to player
        if(this.isDead())
          return;
        player.balance += this.GAIN;
      }
    );
  }

  update() {
    super.update();
    this.gainTrigger.update();
  }
  
}
