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
    
  }

  render() {
    fill('#fff')
    textSize(24)
    textAlign(RIGHT)
    text(this.balance+'', 15, 38, 80)
  }

}
