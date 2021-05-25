class Tile {

  constructor(i, j) {
    this.i = i;
    this.j = j;
    this.plant = null;
    this.sprite = createSprite(0, 0, 70, 70);
    // this.sprite.shapeColor = color(70, 200, 50, 20);
    this.sprite.mouseActive = true;
    this.sprite.setCollider('rectangle', 0, 0, 68, 68);
    this.sprite.onMouseReleased = () => gController.handleTileClick(this.i, this.j);
  }

  update() {
    if (this.hasPlant()) {
      this.plant.update();
      if (this.plant.isDead())
        this.removePlant();
    }
  }

  render() {
    // drawSprite(this.sprite);   
    if (!this.hasPlant()) {
      this.shapeColor = color(200, 200, 50, 50);
      if (this.mouseIsOver)
        this.shapeColor = color(70, 200, 50, 50);
      else
        this.shapeColor = color(20, 50, 200, 50);
    } else {
      this.shapeColor = color(0, 0, 0, 0);
      this.plant.render();
    }
  }

  hasPlant() {
    return !(!this.plant);
  }

  removePlant() {
    this.plant.sprite.remove();
    this.plant = null;
  }

}
