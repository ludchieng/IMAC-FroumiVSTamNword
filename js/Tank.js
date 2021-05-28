class Tank extends Plant {

    constructor(i, j) {
      super(i, j, 300, 500);
      this.sprite.addImage(TEX.TANK);
    }
  
    getWeight() {
        return 20;
    }
  
    update() {
      super.update();
    }
  
    render() {
      super.render();
    }
  }
  