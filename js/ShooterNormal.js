class ShooterNormal extends Shooter {

  constructor(i, j) {
    super(i, j, 100);
    this.sprite.addImage(TEX.FROUMI);

    this.TIME_INTER_SHOOT_NOMINAL = 1.6 * FRAMERATE;
    this.timeInterShoot = this.TIME_INTER_SHOOT_NOMINAL;
    
    this.shootTrigger = new Trigger(
      () => (
        Proba.normalDriven(
          this.timeInterShoot,
          0.5 * FRAMERATE,
          0.1 * FRAMERATE,
          2.5 * FRAMERATE)
      ),
      () => {
        // Shoot
        if(this.isDead())
          return;
        let b = new Ball(this.i, this.j, 50, Proba.normalDriven(0, .5, -1.5, 1.5));
        orphansManager.addOrphan(b);
      }
    );
  }

  getWeight() {
      return 20;
  }

}
