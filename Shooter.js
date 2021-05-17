class Shooter extends Plant {

  constructor(i, j) {
    super(i,j,100,150,"Shooter");
    this.balls = [];
  }

  getHit(d) {
    this.health -= d;
    if(this.health <= 0) {
      this.isDead = true;
      this.health = 0;
    }
  }

  shoot() {
    let b = new Ball(this.i, this.j);
    this.balls.push(b);
  }

  update() {
    for(let b of this.balls) {
      if(b.sprite.position.x > width)
        this.balls.splice(this.balls.indexOf(b),1);
      b.update();
    }
    if(frameCount % 25 == 0 && !this.isDead) {
      this.shoot();
    }
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
