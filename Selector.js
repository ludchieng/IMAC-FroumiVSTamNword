class Selector {
  
  constructor() {
    this.X = 110;
    this.Y = 50;
    this.keys = ['a','z','e','r','q','s','d','f','g'];
    this.plants = [Sunflower, Shooter];
    this.options = new Group();

    this.cursor = createSprite(this.X, this.Y, 60, 80);
    this.cursor.shapeColor = color(255, 10, 10);

    this.selected = 0;
    
    let count = 0;
    for (let i=0; i<this.plants.length; i++) {
      let s = createSprite(this.X + 60 * count++, this.Y, 58, 80);
      s.shapeColor = color(222, 125, 2);
      s.addToGroup(this.options);
    }
  }

  update() {
    let count = 0;
    for (let i=0; i<this.plants.length; i++) {
      if (keyWentDown(this.keys[i]) && count < this.options.length)
        this.selected = count;
      count++;
    }
  }

  render() {
    drawSprites(this.options);
    this.cursor.position.x = this.X + this.selected * 60;
    drawSprite(this.cursor);
  }

  getSelected() {
    return this.plants[this.selected];
  }

  getSelectedPrice() {
    return (new this.plants[this.selected]()).price;
  }
  
}
