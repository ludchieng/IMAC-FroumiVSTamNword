class Plant {
    constructor(i, j, price, hp, t) {
        this.i = i;
        this.j = j;
        this.type = t;

        this.PRICE = price;

        this.sprite = createSprite(0, 0, 50, 50);
        this.sprite.position = tilemap.AbsPosFromIJ(i, j);
        this.health = hp;
        this.isDead = false;
    }

    getHit(d) {
        this.health -= d;
        if(this.health <= 0) {
          this.isDead = true;
          this.health = 0;
        }
    }

    
}