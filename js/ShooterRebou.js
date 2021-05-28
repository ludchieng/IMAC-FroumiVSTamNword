class ShooterRebou extends Shooter {

  constructor(i, j) {
    super(i, j, 250);
    this.sprite.addAnimation('vener', TEX.FROUMI_VENER);

    this.shootTrigger = new Trigger(
      () => (
        Proba.poissonDriven(
          .2 * FRAMERATE,
          .5 * FRAMERATE,
          2.5 * FRAMERATE,
          .5 * FRAMERATE)
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
