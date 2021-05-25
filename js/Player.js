class Player {

  constructor() {
    this.balance = 500;
  }

  canBuy(plant) {
    return this.balance >= plant.PRICE;
  }

  pay(price) {
    if (this.balance >= price) {
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
    fill('#fff')
    textSize(24)
    textAlign(RIGHT)
    text(this.balance+'', 15, 38, 80)
  }

}
