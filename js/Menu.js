class Menu {

  constructor() {
    this.display = true;
    this.startBtn = createButton('Start');
    this.startBtn.elt.id = "start";
    this.startBtn.position(width/2 - this.startBtn.elt.clientWidth/2, height/2);
    this.startBtn.elt.onclick = () => {
      setTimeout(() => {
        gController.changeStateTo(gController.STATES.INGAME);
      }, 20);
    };
  }

  show() {
    this.display = true;
    this.startBtn.elt.style.display = 'block';
  }

  hide() {
    this.display = false;
    this.startBtn.elt.style.display = 'none';
  }

  update() {
    if (keyWentDown(ENTER))
      gController.changeStateTo(gController.STATES.INGAME);
  }

  render() {
    if (!this.display)
      return;
    background(51);
    textAlign(CENTER);
    textSize(56);
    text
    fill('#fff')
    text("Froumis vs. TamNWords", width/2, 260);
  }

}
