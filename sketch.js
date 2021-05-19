let selector;
let tilemap;
let player;
let zombiesArmy;
let gController;
const FRAMERATE = 60;

function setup() {
  frameRate(FRAMERATE);
  createCanvas(900, 630);
  selector = new Selector();
  tilemap = new TileMap();
  player = new Player();
  zombiesArmy = new ZombiesArmy();
  gController = new GameController();
}

function draw() {
  background(51);
  gController.update();
  gController.render();
}

function handleTileClick(i, j) {
  if (!tilemap.get(i, j).hasPlant()) {
    if (player.pay(selector.getSelectedPrice())) {
      tilemap.setPlantFromSelector(i, j);
    }
  }
}
