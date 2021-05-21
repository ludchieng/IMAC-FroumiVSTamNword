class GameController {

  constructor() {
    
  }

  handleEvent(e) {

  }

  update() {
    selector.update();
    tilemap.update();
    player.update();
    zombiesArmy.update();
  }

  render() {
    selector.render();
    tilemap.render();
    player.render();
    zombiesArmy.render();
    // drawSprites();
  }
  
}
