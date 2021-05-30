class GameController {

  constructor() {
    this.STATES = { MENU:0, INGAME:1, GAMEOVER:2, PAUSE:3 };
    this.state = this.STATES.MENU;
    this.menu = new Menu();

    this.modal = new Modal();
    this.COOLDOWN_MODAL = FRAMERATE*30;
    this.cooldown = 0;
    this.statsPanel = new StatsPanel();
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
        document.getElementById("pause-container").style.display = "inherit";
        this.menu.hide();
        //setTimeout(() => this.changeStateTo(this.STATES.GAMEOVER), 50) //TODO remove
        break;
      case this.STATES.GAMEOVER:
        document.getElementById("pause-container").style.display = "none";
        break;
      case this.STATES.PAUSE:
        
        break;
    }
    this.state = state;
  }

  reset() {
    tilemap = new TileMap();
    selector = new Selector();
    player = new Player();
    zombiesArmy = new ZombiesArmy();
    orphansManager = new OrphansManager();
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
        this.statsPanel.render();
        song.stop();
        break;
      case this.STATES.PAUSE:
        //draw 2 rectangles de morts
        break;
    }
  }
}
