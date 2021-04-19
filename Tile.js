class Tile {

  constructor(i, j) {
    this.i = i;
    this.j = j;
    this.plant = null;
    this.sprite = createSprite(0, 0, 68, 68);
    this.sprite.shapeColor = color(70, 200, 50, 20);
    this.sprite.mouseActive = true;
    this.sprite.setCollider('rectangle', 0, 0, 68, 68);
    this.sprite.onMouseReleased = () => handleTileClick(this.i, this.j);
  }

  hasPlant() {
    return !(!this.plant);
  }

  update() {
    
  }

  render() {
  }

}