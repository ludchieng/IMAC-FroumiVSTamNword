let selector;
let tilemap;
let player;
let zombiesArmy;
let gController;

let TEX;
const FRAMERATE = 60;

function preload(){
  TEX = {
    GARDEN: loadImage('assets/garden.png'),
    SUNFLOWER: loadImage('assets/sunflower.png'),
    TAMNWORD: loadImage('assets/tamnword.png'),
    BALL: loadAnimation('assets/cherry0000.png', 'assets/cherry0011.png'),
    FROUMI: loadImage('assets/froumi.png'),
    FROUMI_VENER: loadAnimation('assets/froumivener0000.png', 'assets/froumivener0004.png'),
  }
}

function setup() {
  frameRate(FRAMERATE);
  createCanvas(900, 630);
  gController = new GameController();
  tilemap = new TileMap();
  selector = new Selector();
  player = new Player();
  zombiesArmy = new ZombiesArmy();
}

function draw() {
  gController.update();
  gController.render();
}
