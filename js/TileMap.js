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

  getLinesWeights() {
    const lines = this.tiles[0].map((_, colIndex) => this.tiles.map(row => row[colIndex]));
    return lines.map((line) => (
      line.reduce((acc, curr) => (
        acc + ((curr.plant != null) ? curr.plant.getWeight() : 0)
      ), 10)
    ));
  }

  setPlantFromSelector(i, j) {
    const SelectedPlantClass = selector.getSelected();
    if (SelectedPlantClass === null)
      return false;
    this.get(i, j).plant = new SelectedPlantClass(i, j);
    switch (SelectedPlantClass) {
      case Sunflower: stats.sunflowersCount++; break;
      case ShooterNormal: stats.shootersNormalCount++; break;
      case ShooterRebou: stats.shootersEnragedCount++; break;
      case Tank: stats.tanksCount++; break;
    }
    return true;
  }

  update() {
    for (let col of this.tiles) {
      for (let t of col) {
        t.update();
      }
    }
  }
  
  render() {
    for (let col of this.tiles) {
      for (let t of col) {
        t.render();
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
