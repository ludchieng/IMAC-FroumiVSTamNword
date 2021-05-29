let selector;
let tilemap;
let player;
let zombiesArmy;
let gController;
let orphansManager;
let DEBUG = true;

let TEX;
const FRAMERATE = 60;

let lastMouseButton;

function preload(){
  TEX = {
    GARDEN: loadImage('assets/garden.png'),
    SUNFLOWER: loadImage('assets/sunflower.png'),
    TAMNWORD: loadImage('assets/tamnword.png'),
    TAMNWORD_VENER: loadImage('assets/tamnwordvener.png'),
    BALL: loadAnimation('assets/cherry0000.png', 'assets/cherry0011.png'),
    FROUMI: loadImage('assets/froumi.png'),
    FROUMI_VENER: loadAnimation('assets/froumivener0000.png', 'assets/froumivener0004.png'),
    TANK: loadImage('assets/rock.png'),
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
  orphansManager = new OrphansManager();
}

function draw() {
  gController.update();
  gController.render();
  if (DEBUG) showDebug();
}

function mouseReleased() {
  lastMouseButton = mouseButton;
}

function showDebug() {
  push();
  translate(width-20, 20);
  textSize(13);
  textAlign(RIGHT)
  fill('#0f0');
  text(frameRate().toFixed(0) + " fps", 0, 0);
  text(orphansManager.orphans.length + " orphans", 0, 15);
  text(zombiesArmy.zombies.length + " zombies", 0, 30);
  text(getSprites().length + " sprites", 0, 45);
  pop();
}
