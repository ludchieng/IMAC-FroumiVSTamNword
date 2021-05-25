class Tile {

  constructor(i, j) {
    this.i = i;
    this.j = j;
    this.plant = null;
    this.sprite = createSprite(0, 0, 70, 70);
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
    if (this.hasPlant())
      this.plant.render();

    if (!this.hasPlant() && this.sprite.mouseIsOver) {
      fill('#fff1');
      stroke('#fff');
      strokeWeight(2);
      rectMode(CENTER);
      rect(this.sprite.position.x, this.sprite.position.y, 70, 70);
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
