class GameController {

  constructor() {
    this.STATES = { MENU:0, INGAME:1, GAMEOVER:2, PAUSE:3 };
    this.state = this.STATES.MENU;
    this.menu = new Menu();

    this.modal = new Modal();
    this.COOLDOWN_MODAL = FRAMERATE*30;
    this.cooldown = 0;
  }

  handleTileClick(i, j) {
    if (this.state !== this.STATES.INGAME)
      return;
    if (lastMouseButton === LEFT && !tilemap.get(i, j).hasPlant()) {
      // Set plant
      if (player.canBuy(selector.getSelectedPrice())) {
        if (tilemap.setPlantFromSelector(i, j))
          player.pay(selector.getSelectedPrice())
      }
    }
    if (lastMouseButton === RIGHT && tilemap.get(i, j).hasPlant()) {
      // Remove plant
      let plant = tilemap.get(i, j).plant
      player.balance += Math.min(
        .5 * plant.PRICE,
        (plant.health/plant.HEALTH_MAX * plant.PRICE / 10).toFixed(0) * 10
      );
      tilemap.get(i, j).removePlant();
    }
  }

  changeStateTo(state) {
    switch (state) {
      case this.STATES.MENU:
        this.menu.show();
        break;
      case this.STATES.INGAME:
        this.menu.hide();
        break;
      case this.STATES.GAMEOVER:
        break;
      case this.STATES.PAUSE:
        
        break;
    }
    this.state = state;
  }

  update() {
    switch (this.state) {
      case this.STATES.MENU:
        this.menu.update();
        break;
      case this.STATES.INGAME:
        selector.update();
        tilemap.update();
        player.update();
        zombiesArmy.update();
        orphansManager.update();

        if(this.cooldown === this.COOLDOWN_MODAL && !this.modal.isActivated) {
          let card = Proba.pickUniformlyFrom(CARDS);
          this.modal.modalSetUp(card.type, card.content, card.effect);
          this.modal.isActivated = true;
          this.cooldown = 0;
        } else if(!this.modal.isActivated) {
          this.cooldown++;
        }
        break;
      case this.STATES.GAMEOVER:
        
        break;
      case this.STATES.PAUSE:
        break;
    }
  }

  render() {
    switch (this.state) {
      case this.STATES.MENU:
        this.menu.render();
        break;
      case this.STATES.INGAME:
        background(51);
        image(TEX.GARDEN, tilemap.X-tilemap.TILE_SIZE/2, tilemap.Y-tilemap.TILE_SIZE/2);
        selector.render();
        tilemap.render();
        player.render();
        zombiesArmy.render();
        orphansManager.render();
        break;
      case this.STATES.GAMEOVER:
        background(51);
        textSize(75);
        textAlign(CENTER);
        fill(255,255,255);
        text("THE END", width/2, height/4);

        textSize(20);
        text("Score : ", width/2, height/2);
        text("Kills : ", width/2, height/1.8);
        break;
      case this.STATES.PAUSE:
        //draw 2 rectangles de morts
        break;
    }
  }
  
}
