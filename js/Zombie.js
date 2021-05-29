class Zombie {

  constructor(
    i, j,
    texture = TEX.TAMNWORD,
    health = 200,
    atk = 35,
    speed = Proba.normalDriven(50, 2, 45, 55) / FRAMERATE,
    )
  {
    this.SPEED = speed;
    this.STATES = { STOPPED: 0, MOVING: 1, EATING: 2 };
    this.i = i;
    this.j = j;
    this.sprite = createSprite(100, 50, 60, 60);
    this.sprite.addImage(texture);
    this.sprite.position = tilemap.AbsPosFromIJ(i, j);
    this.sprite.position.x += Proba.uniform() * 100;
    this.HEALTH_MAX = health;
    this.health = this.HEALTH_MAX;
    this.atk = atk;
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
    this.sprite.position.x += this.cx;
    this.collide();
    if (this.isDead())
      this.sprite.remove();
    if(this.sprite.position.x < 0) {
      gController.changeStateTo(gController.STATES.GAMEOVER);
    }
  }

  isDead() {
    return this.health <= 0 || this.sprite.position.x < 0;
  }

  render() {
    drawSprite(this.sprite);
    if (this.health / this.HEALTH_MAX < 1) {
      push();
      translate(this.sprite.position.x, this.sprite.position.y);
      rectMode(CORNER);
      stroke('#0009');
      strokeWeight(1)
      fill('#e00d');
      rect(-25, -30, 50, 4);
      fill('#0e0e');
      rect(-25, -30, 50 * this.health / this.HEALTH_MAX, 4);
      pop();
    }
  }

}
