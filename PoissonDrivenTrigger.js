class PoissonDrivenTrigger {

  constructor(lambda, min, max, delay, funcToTrigger) {
    this.funcToTrigger = funcToTrigger;
    this.countdown;
    this.settings = {
      lambda: lambda,
      min: min,
      max: max,
      delay: delay,
    }
    this.reset();
  }

  reset() {
    this.countdown = Proba.poissonDriven(
      this.settings.lambda,
      this.settings.min,
      this.settings.max,
      this.settings.delay
    );
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
