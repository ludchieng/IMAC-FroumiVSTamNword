class Sunflower {

  constructor(i, j) {
    this.i = i;
    this.j = j;
    this.PRICE = 50;

    this.sprite = createSprite(0, 0, 50, 50);
    this.sprite.position = tilemap.AbsPosFromIJ(i, j);

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
