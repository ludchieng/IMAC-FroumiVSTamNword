class Ball {

    constructor(i, j) {
      this.i = i;
      this.j = j;
      this.cx = 10;
      this.cy = Proba.normalDriven(0, .5, -1.5, 1.5);
      this.sprite = createSprite(0, 0, 50, 50);
      this.sprite.position = tilemap.AbsPosFromIJ(i, j);
      this.atk = 50;
      this.hasHitSomething = false;
    }

    move() {
        this.sprite.position.x += this.cx;
        this.sprite.position.y += this.cy;
    }

    collide() {
        for(let z of zombiesArmy.zombies) {
            if(this.sprite.overlap(z.sprite)) {
                z.getHit(this.atk);
                this.hasHitSomething = true;
            }
        }
    }

    update() {
        if (this.isDead())
            this.sprite.remove();
        this.move();
        this.collide();
    }

    isDead() {
        return this.hasHitSomething || this.sprite.position.x > width;
    }
  
    render() {
      rectMode(CENTER);
      circle(this.sprite.position.x, this.sprite.position.y , 10);
      rectMode(CORNER);
    }

}
