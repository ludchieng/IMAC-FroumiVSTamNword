class TileMap {
  
  constructor() {
    this.X = 75;  // in pixels
    this.Y = 140; // in pixels
    this.SIZE_X = 12;
    this.SIZE_Y = 7;
    this.TILE_SIZE = 70;
    this.tiles = [];

    for (let i = 0; i < this.SIZE_X; i++) {
      this.tiles.push([]);
      for (let j = 0; j < this.SIZE_Y; j++) {
        let t = new Tile(i, j);
        t.sprite.position.x = this.X + this.TILE_SIZE * i;
        t.sprite.position.y = this.Y + this.TILE_SIZE * j;
        this.tiles[i].push(t);
      }
    }

  }

  get(i, j) {
    return this.tiles[i][j];
  }

  setPlantFromSelector(i, j) {
    const SelectedPlantClass= selector.getSelected();
    this.get(i, j).plant = new SelectedPlantClass(i, j);
  }

  update() {
    for (let col of this.tiles) {
      for (let t of col) {
        if (t.plant) {
          t.plant.update();
        }
      }
    }
  }
  
  render() {
    for (let col of this.tiles) {
      for (let t of col) {
        if (!t.plant) {
          t.shapeColor = color(200, 200, 50, 50);
          if (t.mouseIsOver)
            t.shapeColor = color(70, 200, 50, 50);
          else
            t.shapeColor = color(20, 50, 200, 50);
        } else {
          t.shapeColor = color(0, 0, 0, 0);
          t.plant.render();
        }
        drawSprite(t.sprite);
      }
    }
  }

  AbsPosFromIJ(i,j) {
    return {
      x: this.X + i * this.TILE_SIZE,
      y: this.Y + j * this.TILE_SIZE,
      z: 0
    }
  }

}
