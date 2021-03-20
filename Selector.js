class Selector {

  constructor(options) {
    this.X = 110;
    this.Y = 50;
    this.options = new Group();

    this.cursor = createSprite(this.X, this.Y, 60, 80);
    this.cursor.shapeColor = color(255, 10, 10);

    this.selected = 0;
    
    let count = 0;
    for (let o of options) {
      let s = createSprite(this.X + 60 * count++, this.Y, 58, 80);
      s.shapeColor = color(222, 125, 2);
      s.addToGroup(this.options);
    }
  }

  update() {
    let count = 0;
    for (let key of ['a','z','e','r','q','s','d','f','g']) {
      if (keyWentDown(key) && count < this.options.length)
        this.selected = count;
      count++;
    }
  }

  render() {
    drawSprites(this.options);
    this.cursor.position.x = this.X + this.selected * 60;
    drawSprite(this.cursor);
  }
  
}
