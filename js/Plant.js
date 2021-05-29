class Plant {
    constructor(i, j, price, hp) {
        this.i = i;
        this.j = j;

        this.PRICE = price;

        this.sprite = createSprite(tilemap.AbsPosFromIJ(i,j).x, tilemap.AbsPosFromIJ(i,j).y, 50, 50);
        this.sprite.position = tilemap.AbsPosFromIJ(i, j);
        this.sprite.setCollider('rectangle', 0, 0, 30, 30);
        this.HEALTH_MAX = hp;
        this.health = this.HEALTH_MAX;
    }

    getHit(d) {
        this.health -= d / FRAMERATE;
        if(this.health <= 0) {
          this.health = 0;
        }
    }

    isDead() {
        return this.health <= 0;
    }

    getWeight() {
        return 10;
    }

    update() { 
        if (this.isDead())
            this.sprite.remove();
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
