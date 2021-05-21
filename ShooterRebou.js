class ShooterRebou extends Shooters {
    constructor(i, j) {
        super(i, j, 250);
        this.sprite.addImage(loadImage('assets/froumiVener.png'));

        this.shootTrigger = new PoissonDrivenTrigger(
            0.2 * FRAMERATE,
            .5 * FRAMERATE,
            2.5 * FRAMERATE,
            .5 * FRAMERATE,
            () => {
              if(this.isDead())
                return;
              let b = new Ball(this.i, this.j, Proba.normalDriven(0, 5, -15, 15));
              this.balls.push(b);
            }
        );
    } 
    render() {
      animation(ANIMATION_FROUMI_VENER, this.sprite.position.x, this.sprite.position.y);
  
      for(let b of this.balls) {
        b.render();
      }
    }
}