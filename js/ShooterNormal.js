class ShooterNormal extends Shooter {

  constructor(i, j) {
    super(i, j, 100);
    this.sprite.addImage(loadImage('assets/froumi.png'));
    
    this.shootTrigger = new PoissonDrivenTrigger(
      0.2 * FRAMERATE,
      1.5 * FRAMERATE,
      2.5 * FRAMERATE,
      1.5 * FRAMERATE,
      () => {
        // Shoot
        if(this.isDead())
          return;
        let b = new Ball(this.i, this.j, 50, Proba.normalDriven(0, .5, -1.5, 1.5));
        this.balls.push(b);
      }
    );
  }

}
