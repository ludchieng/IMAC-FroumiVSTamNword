class Menu {

  constructor() {
    this.dom = document.getElementById('menu');
    this.display;
    this.startBtn = document.getElementById('button-container');
    this.sliders = this.createSliders();
    this.show();
  }

  createSliders() {
    let res = {
      sunflowerGainSpeed: document.getElementById('sunflowerGainSpeed'),
      buffsDuration: document.getElementById('buffsDuration'),
      zombieSpawnSpeed: document.getElementById('zombieSpawnSpeed'),
      enragedZombiesSuccessRate: document.getElementById('enragedZombiesSuccessRate'),
      cooldownDuration: document.getElementById('cooldownDuration'),
    };
    res.sunflowerGainSpeed.onchange = (e) => { config.sunflowerGainSpeed = +e.target.value }
    res.buffsDuration.onchange = (e) => { config.buffsDuration = +e.target.value }
    res.zombieSpawnSpeed.onchange = (e) => { config.zombieSpawnSpeed = +e.target.value }
    res.enragedZombiesSuccessRate.onchange = (e) => { config.enragedZombiesSuccessRate = +e.target.value }
    res.cooldownDuration.onchange = (e) => { config.cooldownDuration = +e.target.value }
    return res;
  }

  show() {
    this.display = true;
    this.dom.hidden = !this.display;
    this.startBtn.hidden = !this.display;
  }

  hide() {
    this.display = false;
    this.dom.hidden = !this.display;
    this.startBtn.hidden = !this.display;
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
    fill('#fff')
    text("Froumis vs. TamNWords", width/2, 260);
  }
}
