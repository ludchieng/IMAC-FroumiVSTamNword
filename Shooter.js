class Shooter extends Plant {

  constructor(i, j) {
    super(i,j,100,200);
    this.balls = [];

    this.shootTrigger = new PoissonDrivenTrigger(
      0.2 * FRAMERATE,
      1.5 * FRAMERATE,
      2.5 * FRAMERATE,
      1.5 * FRAMERATE,
      () => {
        if(this.isDead())
          return;
        let b = new Ball(this.i, this.j);
        this.balls.push(b);
      }
    );
  }

  update() {
    for(let b of this.balls) {
      if(b.sprite.position.x > width)
        this.balls.splice(this.balls.indexOf(b),1);
      b.update();
    }
    this.shootTrigger.update();
  }

  render() {
    rectMode(CENTER);
    rect(this.sprite.position.x, this.sprite.position.y , 50, 50);
    rectMode(CORNER);

    for(let b of this.balls) {
      b.render();
    }
  }

}
