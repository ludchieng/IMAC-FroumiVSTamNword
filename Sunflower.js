class Sunflower extends Plant {

  constructor(i, j) {
    super(i,j,50,150);
    this.GAIN = 50;

    this.sprite.addImage(loadImage('assets/sunflower.png'));

    this.gainTrigger = new PoissonDrivenTrigger(
      10 * FRAMERATE,
      1 * FRAMERATE,
      30 * FRAMERATE,
      1 * FRAMERATE,
      () => {
        if(this.isDead())
          return;
        player.balance += this.GAIN;
      }
    );
  }

  update() {
    this.gainTrigger.update();
  }

  render() {
    // ellipse(this.sprite.position.x, this.sprite.position.y , 50, 50);
    drawSprite(this.sprite);
  }
}
