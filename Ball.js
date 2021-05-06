class Ball {

    constructor(i, j) {
      this.i = i;
      this.j = j;
      this.cx = 10;
      this.cy = 0; // LOI DE PROBA
      this.sprite = createSprite(0, 0, 50, 50);
      this.sprite.position = tilemap.AbsPosFromIJ(i, j);
      this.atk = 50;
    }

    move() {
        this.sprite.position.x += this.cx;
        this.sprite.position.y += this.cy;
    }

    collide() {
        for(let z of zombiesArmy.zombies) {
            if(this.sprite.overlap(z.sprite)) {
                z.getHit(this.atk);
                this.sprite.position.x = -500;
                this.sprite.position.y = -500;
                this.cx = 0;
                this.cy = 0;
            }
        }
    }

    update() {
        this.move();
        this.collide();
        //console.log(this.i + " " + this.j);
    }
  
    render() {
      rectMode(CENTER);
      circle(this.sprite.position.x, this.sprite.position.y , 10);
      rectMode(CORNER);
    }

}