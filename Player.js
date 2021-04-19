class Player {

  constructor() {
    this.balance = 150;
    console.log("balance: ", this.balance);
  }

  canBuy(plant) {
    return this.balance >= plant.price;
  }

  pay(price) {
    if (this.balance >= price) {
      player.balance -= price;
      console.log("balance: ", this.balance);
      return true;
    }
    console.log("balance: ", this.balance);
    return false;
  }

  update() {
    
  }

  render() {
    fill('#fff')
    textSize(24)
    textAlign(RIGHT)
    text(this.balance.toString(), 15, 25, 50)
  }

}
