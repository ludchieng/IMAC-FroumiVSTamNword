class OrphansManager {

  constructor() {
    this.orphans = []
  }
  
  addOrphan(s) {
    this.orphans.push(s);
  }
  
  update() {
    for (const os of this.orphans) {
      if (os.update !== undefined)
        os.update();
      if (os.isDead !== undefined && os.isDead()) {
        if (os.sprite !== undefined)
          os.sprite.remove();
        this.orphans.remove(os);
      }
    }
  }

  render() {
    for (const os of this.orphans)
      if (os.render !== undefined)
        os.render();
  }

}
