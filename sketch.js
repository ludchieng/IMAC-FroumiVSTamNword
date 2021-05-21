let selector;
let tilemap;
let player;
let zombiesArmy;
let gController;
let garden;
let ANIMATION_BALL;
let ANIMATION_FROUMI_VENER;
const FRAMERATE = 60;

function preload(){
  garden = loadImage('assets/garden.png');
  ANIMATION_BALL = loadAnimation('assets/cherry0000.png', 'assets/cherry0011.png');
  ANIMATION_FROUMI_VENER = loadAnimation('assets/froumivener0000.png', 'assets/froumivener0004.png');
}

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
  image(garden, tilemap.X-tilemap.TILE_SIZE/2, tilemap.Y-tilemap.TILE_SIZE/2);

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
