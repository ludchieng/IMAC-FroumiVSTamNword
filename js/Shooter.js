class Shooter extends Plant {

  constructor(i, j, price) {
    super(i, j, price, 200);
    this.balls = [];

    this.shootTrigger = new Trigger(
      () => (
        Proba.poissonDriven(
          0.2 * FRAMERATE,
          1.5 * FRAMERATE,
          2.5 * FRAMERATE,
          1.5 * FRAMERATE)
      ),
      () => {
        // Shoot
        if(this.isDead())
          return;
        let b = new Ball(this.i, this.j, 50, 0);
        this.balls.push(b);
      }
    );
  }

  getWeight() {
      return 20;
  }

  update() {
    super.update();
    for(let b of this.balls) {
      if(b.isDead())
        this.balls.remove(b);
      b.update();
    }
    this.shootTrigger.update();
  }

  render() {
    super.render();
    for(let b of this.balls)
      b.render();
  }

}
