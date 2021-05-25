class Selector {
  
  constructor() {
    this.X = 150;
    this.Y = 50;
    this.KEYS = ['a','z','e','r','q','s','d','f','g'];
    this.PLANTS = [Sunflower, ShooterNormal, ShooterRebou];
    this.PLANTS_PRICES = this.PLANTS.map((clas) => (new clas()).PRICE);
    this.TEX_PLANTS = {
      colored: [
        'assets/sunflower.png',
        'assets/froumi.png',
        'assets/froumivener0000.png',
      ],
      bw: [
        'assets/sunflower_bw.png',
        'assets/froumi_bw.png',
        'assets/froumiVener_bw.png',
      ] 
    };

    this.idxSelected = 0;
    
    this.sprites = {
      colored: [],
      bw: [],
    };

   this.loadSprites();
  }

  loadSprites() {
    for (let i=0; i<this.PLANTS.length; i++) {
      let s = createSprite(this.X + 70 * i, this.Y + 5, 58, 80);
      s.addImage(loadImage(this.TEX_PLANTS.bw[i]));
      s.scale *= .7;
      this.sprites.bw.push(s);

      s = createSprite(this.X + 70 * i, this.Y + 5, 58, 80);
      s.addImage(loadImage(this.TEX_PLANTS.colored[i]));
      s.scale *= .7;
      this.sprites.colored.push(s);
    }
  }

  update() {
    let count = 0;
    for (let i=0; i<this.PLANTS.length; i++) {
      if (keyWentDown(this.KEYS[i]) && count < this.PLANTS.length)
        this.idxSelected = count;
      count++;
    }
  }

  render() {
    for (let i=0; i<this.PLANTS.length; i++) {
      if(i == this.idxSelected)
        drawSprite(this.sprites.colored[i]);
      else
        drawSprite(this.sprites.bw[i]);
      textAlign(CENTER);
      textSize(18);
      fill('#fff');
      text(this.PLANTS_PRICES[i], this.X + 70 * i, this.Y - 27);
      textSize(15);
      fill('#fff9');
      text(this.KEYS[i], this.X + 70 * i, this.Y + 45);
    }
  }

  /**
   * @returns the class reference of the plant
   */
  getSelected() {
    return this.PLANTS[this.idxSelected];
  }

  getSelectedPrice() {
    // Instanciate a plant to get its price
    return this.PLANTS_PRICES[this.idxSelected];
  }
  
}
