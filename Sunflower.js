class Sunflower {

  constructor(i, j) {
    this.i = i;
    this.j = j;
    this.price = 50;
    this.sprite = createSprite(0, 0, 50, 50);
    this.sprite.position = tilemap.AbsPosFromIJ(i, j);
  }

  update() {
    
  }

  render() {
    ellipse(this.sprite.position.x, this.sprite.position.y , 50, 50);
  }

}
