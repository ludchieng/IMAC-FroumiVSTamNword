class Player {

  constructor() {
    this.balance = 1000;
  }

  canBuy(price) {
    return !isNaN(price) && this.balance >= price;
  }

  pay(price) {
    if (!isNaN(price) && this.balance >= price) {
      player.balance -= price;
      return true;
    }
    return false;
  }

  update() {
    if (Proba.uniform() < 1/FRAMERATE/15)
      this.balance += 50;
  }

  render() {
    rectMode(CORNER);
    fill('#fff');
    textSize(24);
    textAlign(RIGHT);
    noStroke();
    text(this.balance+'', 15, 38, 80)
  }

}
