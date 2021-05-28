class SpriteText {

  constructor(x, y, text, textColor = '#fff', strokeColor = '#000', size = 24, align = CENTER) {
    this.x = x;
    this.y = y;
    this.text = text;
    this.size = size;
    this.textColor = color(textColor);
    this.strokeColor = color(strokeColor);
    this.velocity = 25;
    this.align = align;
    this.LIFESPAN_MAX = FRAMERATE * 2;
    this.lifespan = this.LIFESPAN_MAX;
  }

  update() {
    if (this.lifespan > 0) {
      this.lifespan--;
    }
    this.textColor.setAlpha(255 * this.lifespan / this.LIFESPAN_MAX);
    this.strokeColor.setAlpha(255 * this.lifespan / this.LIFESPAN_MAX);
    this.y -= this.velocity / FRAMERATE;
  }

  isDead() {
    return this.lifespan <= 0;
  }

  render() {
    push();
    fill(this.textColor);
    textSize(this.size);
    textAlign(this.align);
    textStyle(BOLD);
    stroke(this.strokeColor);
    strokeWeight(2);
    text(this.text, this.x, this.y);
    pop();
  }
  
}
