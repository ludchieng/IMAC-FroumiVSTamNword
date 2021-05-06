class Shooter {

  constructor(i, j) {
    this.i = i;
    this.j = j;
    this.PRICE = 100;
    this.sprite = createSprite(0, 0, 50, 50);
    // this.sprite = loadImage('assets/froumi.png');
    this.sprite.position = tilemap.AbsPosFromIJ(i, j);
    this.health = 150;
    this.balls = []
    this.isDead = false;
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
      //console.log("SHOOT");
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
