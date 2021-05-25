class Trigger {

  constructor(probaFunc, funcToTrigger) {
    this.probaFunc = probaFunc;
    this.funcToTrigger = funcToTrigger;
    this.countdown;
    this.reset();
  }

  reset() {
    this.countdown = this.probaFunc();
  }

  update() {
    if (this.countdown > 0) {
      this.countdown--;
    } else {
      this.funcToTrigger();
      this.reset();
    }
  }

}
