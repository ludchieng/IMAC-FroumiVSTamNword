class SelectorItem {

  constructor(texColored, texBW, index, eclass, textPrice, textKey, cooldownMax) {
    this.eclass = eclass;
    this.index = index;
    this.textPrice = textPrice;
    this.textKey = textKey;
    this.COOLDOWN_MAX = cooldownMax;
    this.cooldown = 0;

    this.sprites = {
      colored: this.loadSprite(texColored),
      bw: this.loadSprite(texBW)
    };
  }

  loadSprite(name) {
    let s = createSprite(70*this.index, 5, 58, 80);
    s.addImage(loadImage(name));
    s.scale *= .7;
    return s;
  }

  get() {
    if (this.cooldown === 0) {
      this.cooldown = this.COOLDOWN_MAX;
      return this.eclass;
    } else {
      return null;
    }
  }

  getPrice() {
    return +this.textPrice;
  }

  update() {
    if (this.cooldown > 0)
      this.cooldown--;
  }

  render(withColor = false) {
    if (withColor)
      drawSprite(this.sprites.colored);
    else
      drawSprite(this.sprites.bw);

    translate(70*this.index);
    textAlign(CENTER);
    textSize(18);
    fill('#fff');
    text(this.textPrice, 70*this.index, -27);
    textSize(15);
    fill('#fff9');
    text(this.textKey, 70*this.index, +44);

    noStroke();
    fill('#fff2');
    rect(70*this.index-35, 48, 70, -70 * this.cooldown/this.COOLDOWN_MAX);
  }

  isAvailable() {
    return this.cooldown === 0;
  }

}
