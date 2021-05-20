class Plant {
    constructor(i, j, price, hp) {
        this.i = i;
        this.j = j;

        this.PRICE = price;

        this.sprite = createSprite(0, 0, 50, 50);
        this.sprite.position = tilemap.AbsPosFromIJ(i, j);
        this.health = hp;
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

    
}
