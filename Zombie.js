class Zombie {

  constructor(i, j) {
    this.i = i;
    this.j = j;
    this.sprite = createSprite(0, 0, 50, 50);
    this.sprite.position = tilemap.AbsPosFromIJ(i, j);
    this.isDead = false;
  }

  update() {
    this.sprite.position.x -= 10.65;
    if (this.sprite.position.x < 0) {
      this.isDead = true;
    }
  }

  render() {
    rectMode(CENTER);
    rect(this.sprite.position.x, this.sprite.position.y , 20, 60);
    rectMode(CORNER);
  }

}
