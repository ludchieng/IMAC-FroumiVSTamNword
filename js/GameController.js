class GameController {

  constructor() {
    this.STATES = { MENU:0, INGAME:1, GAMEOVER:2 };
    this.state = this.STATES.MENU;
    this.menu = new Menu();
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
      player.balance += tilemap.get(i, j).plant.PRICE / 2;
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
        break;
      case this.STATES.GAMEOVER:
        
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
        break;
      case this.STATES.GAMEOVER:
        
        break;
    }
  }
  
}
