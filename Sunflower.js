class Sunflower extends Plant {

  constructor(i, j) {
    super(i,j,50,50,"Sunflower");

    this.MAX_COOLDOWN = 10 * getFrameRate();
    this.cooldown = this.MAX_COOLDOWN;
    this.GAIN = 50;
  }

  update() {
    if (this.cooldown <= 0) {
      if (Math.random() > .994) {
        player.balance += this.GAIN;
      }
    } else {
      this.cooldown--;
    }
  }

  render() {
    ellipse(this.sprite.position.x, this.sprite.position.y , 50, 50);
  }
}
