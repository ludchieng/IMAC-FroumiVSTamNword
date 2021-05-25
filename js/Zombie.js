class Zombie {

  constructor(i, j) {
    this.SPEED = Proba.normalDriven(50, 2, 45, 55) / FRAMERATE;
    this.STATES = { STOPPED: 0, MOVING: 1, EATING: 2 };
    this.i = i;
    this.j = j;
    this.sprite = createSprite(100, 50, 60, 60);
    this.sprite.addImage(TEX.TAMNWORD);
    this.sprite.position = tilemap.AbsPosFromIJ(i, j);
    this.sprite.position.x += Proba.uniform() * 100;
    this.health = 200;
    this.atk = 35;
    this.cx = -this.SPEED;
    this.state = this.STATES.MOVING;
  }

  getHit(d) {
    this.health -= d;
    if(this.health <= 0) {
      this.health = 0;
    }
  }

  collide() {
    for (let col of tilemap.tiles) {
      for (let t of col) {
        if (t.hasPlant() && this.sprite.overlap(t.plant.sprite)) {
          this.changeStateTo(this.STATES.EATING);
          t.plant.getHit(this.atk);
          return;
        } else {
          this.changeStateTo(this.STATES.MOVING);
        }
      }
    }
  }

  changeStateTo(state) {
    if (state === this.state)
      return;

    this.state = state;
    switch (state) {
      case this.STATES.STOPPED:
        this.cx = 0;
        break;
      case this.STATES.MOVING:
        this.cx = -this.SPEED;
        break;
      case this.STATES.EATING:
        this.cx = 0;
        break;
    }
  }

  update() {
    if (this.isDead())
      this.sprite.remove();
    this.sprite.position.x += this.cx;
    this.collide();
  }

  isDead() {
    return this.health <= 0 || this.sprite.position.x < 0;
  }

  render() {
    drawSprite(this.sprite);
  }

}
