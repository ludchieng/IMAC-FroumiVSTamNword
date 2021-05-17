class Zombie {

  constructor(i, j) {
    this.SPEED = 4;
    this.i = i;
    this.j = j;
    this.sprite = createSprite(0, 0, 50, 50);
    this.sprite.position = tilemap.AbsPosFromIJ(i, j);
    this.isDead = false;
    this.health = 100;
    this.atk = 100;
    this.cx = -this.SPEED;
  }

  getHit(d) {
    this.health -= d;
    if(this.health <= 0) {
      this.isDead = true;
      this.health = 0;
    }
  }

  collide() {
    for(let col of tilemap.tiles) {
      for(let t of col) {
        console.log(t);
        if(t.hasPlant()) {
          if(this.sprite.overlap(t.plant.sprite)) {
            t.plant.getHit(this.atk);
            this.cx = 0;
          } else {
            this.cx = -this.SPEED;
          }
        }
      }
    }
  }

  update() {
    this.sprite.position.x += this.cx;
    if (this.sprite.position.x < 0) {
      this.isDead = true;
      this.cx = 0;
    }
    this.collide();
  }

  render() {
    rectMode(CENTER);
    rect(this.sprite.position.x, this.sprite.position.y , 20, 60);
    rectMode(CORNER);
  }

}
