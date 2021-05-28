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
      if (os.isDead !== undefined && os.isDead())
        this.orphans.remove(os);
    }
  }

  render() {
    for (const os of this.orphans)
      if (os.render !== undefined)
        os.render();
  }

}
