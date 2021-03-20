let selector;
let tilemap;

function setup() {
  createCanvas(900, 500);
  selector = new Selector([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  tilemap = new TileMap();
}

function draw() {
  background(51);
  selector.update();
  selector.render();
  tilemap.update();
  tilemap.render();
}