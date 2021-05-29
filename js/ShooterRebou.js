class ShooterRebou extends Shooter {

  constructor(i, j) {
    super(i, j, 250);
    this.sprite.addAnimation('normal', TEX.FROUMI_VENER);
    this.sprite.addAnimation('saiyan', TEX.SAIYAN);
    this.TIME_INTER_SHOOT_NOMINAL = .5 * FRAMERATE;
    this.timeInterShoot = this.TIME_INTER_SHOOT_NOMINAL;

    this.shootTrigger = new Trigger(
      () => (
        Proba.normalDriven(
          this.timeInterShoot,
          .5 * FRAMERATE,
          .05 * FRAMERATE,
          1.5 * FRAMERATE)
    ),
      () => {
        // Shoot
        if(this.isDead())
          return;
        let b = new Ball(this.i, this.j, 25, Proba.normalDriven(0, 5, -15, 15));
        orphansManager.addOrphan(b);
      }
    );
  }

  getWeight() {
      return 30;
  }

}
