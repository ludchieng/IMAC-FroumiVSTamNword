class Selector {
  
  constructor() {
    this.X = 210;
    this.Y = 50;
    this.KEYS = ['a','z','e','r','q','s','d','f','g'];
    this.PLANTS = [Sunflower, ShooterNormal, ShooterRebou];

    this.cursor = createSprite(this.X, this.Y, 60, 80);
    this.cursor.shapeColor = color(255, 10, 10);

    this.selected = 0;
    

    let plants_images_colored = ['assets/sunflower.png','assets/froumi.png','assets/froumivener0000.png'];
    let plants_images = ['assets/sunflower_bw.png','assets/froumi_bw.png','assets/froumiVener_bw.png'];
    
    this.sprites_colored = [];
    this.sprites_bw = [];

    for (let i=0; i<this.PLANTS.length; i++) {
      let s = createSprite(this.X + 90 * i, this.Y, 58, 80);
      s.addImage(loadImage(plants_images[i]));
      this.sprites_bw.push(s);

      s = createSprite(this.X + 90 * i, this.Y, 58, 80);
      s.addImage(loadImage(plants_images_colored[i]));
      this.sprites_colored.push(s);
    }
  }

  update() {
    let count = 0;
    for (let i=0; i<this.PLANTS.length; i++) {
      if (keyWentDown(this.KEYS[i]) && count < this.PLANTS.length)
        this.selected = count;
      count++;
    }
  }

  render() {
    for (let i=0; i<this.PLANTS.length; i++) {
      if(i == this.selected) drawSprite(this.sprites_colored[i]);
      else drawSprite(this.sprites_bw[i]);
    }
  }

  /**
   * @returns the class reference of the plant
   */
  getSelected() {
    return this.PLANTS[this.selected];
  }

  getSelectedPrice() {
    // Instanciate a plant to get its price
    return (new this.PLANTS[this.selected]()).PRICE;
  }
  
}
