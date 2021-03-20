class TileMap {

  constructor() {
    this.X = 75;
    this.Y = 140;
    this.tiles = [];

    for (let x = 0; x < 12; x++) {
      this.tiles.push([]);
      for (let y = 0; y < 5; y++) {
        this.tiles[x].push(this.createTile(x, y));
      }
    }

  }

  setPlant(x, y) {
    this.tiles[x][y].plant = true;
  }

  update() {
    
  }
  
  render() {
    for (let col of this.tiles) {
      for (let t of col) {
        if (t.mouseIsOver)
          t.shapeColor = color(200, 200, 50);
        else if (!t.plant)
          t.shapeColor = color(70, 200, 50);
        else
          t.shapeColor = color(20, 50, 200);

        drawSprite(t);
      }
    }
  }
  
  createTile(x, y) {
    let s = createSprite(this.X + 70*x, this.Y + 70*y, 68, 68);
    s.shapeColor = color(70, 200, 50);
    s.mouseActive = true;
    s.x = x;
    s.y = y;
    s.setCollider('rectangle', 0, 0, 68, 68);
    s.onMouseReleased = () => {
      this.setPlant(s.x, s.y);
    }
    return s;
  }

}
