let selector;
let tilemap;
let player;

function setup() {
  createCanvas(900, 500);
  selector = new Selector();
  tilemap = new TileMap();
  player = new Player();
}

function draw() {
  background(51);
  selector.update();
  selector.render();
  tilemap.update();
  tilemap.render();
  player.update();
  player.render();
}

function handleTileClick(i, j) {
  if (!tilemap.get(i, j).hasPlant()) {
    if (player.pay(selector.getSelectedPrice())) {
      tilemap.setPlantFromSelector(i, j);
    }
  }
}
