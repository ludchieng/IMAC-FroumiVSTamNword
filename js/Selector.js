class Selector {
  
  constructor() {
    this.X = 150;
    this.Y = 50;
    this.KEYS = { a:0, z:1, e:2, r:3, q:4, s:5, d:6, f:7, g:8 };
    this.KEYS['SHIFT'] = -1;
    this.items = this.createItems();
    this.idxSelected = 0;
  }

  createItems() {
    let i = 0;
    const keys = Object.keys(this.KEYS);
    return [
      new SelectorItem(
        'assets/sunflower.png', 'assets/sunflower_bw.png', i,
        Sunflower, (new Sunflower()).PRICE, keys[i++], FRAMERATE*2),
      new SelectorItem(
        'assets/froumi.png', 'assets/froumi_bw.png', i,
        ShooterNormal, (new ShooterNormal()).PRICE, keys[i++], FRAMERATE*1.5),
      new SelectorItem(
        'assets/froumivener0003.png', 'assets/froumiVener_bw.png', i,
        ShooterRebou, (new ShooterRebou()).PRICE, keys[i++], FRAMERATE*4),
      new SelectorItem(
        'assets/rock.png', 'assets/rock_bw.png', i,
        Tank, (new Tank()).PRICE, keys[i++], FRAMERATE*5),  
    ]
  }

  update() {
    for (const k in this.KEYS) {
      //console.log(k);
      if (keyWentDown(k))
        this.idxSelected = this.KEYS[k];
    }

    for (let item of this.items)
      item.update();
  }

  render() {
    push();
    translate(this.X, this.Y);
    for (let i = 0; i < this.items.length; i++)
      this.items[i].render(this.idxSelected === i);
    pop();
  }

  /**
   * @returns the class reference of the plant
   */
  getSelected() {
    if (this.items[this.idxSelected] !== undefined)
      return this.items[this.idxSelected].get();
    return null;
  }

  getSelectedPrice() {
    if (this.items[this.idxSelected] !== undefined)
      return this.items[this.idxSelected].getPrice();
    return null;
  }
  
}
