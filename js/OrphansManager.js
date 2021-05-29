class OrphansManager {

  constructor() {
    this.orphans = []
  }
  
  addOrphan(s) {
    this.orphans.push(s);
  }
  
  update() {
    for (const o of this.orphans) {
      if (o.update !== undefined)
        o.update();
      if (o.isDead !== undefined && o.isDead()) {
        if (o.sprite !== undefined)
          o.sprite.remove();
        this.orphans.remove(o);
      }
    }
  }

  render() {
    for (const o of this.orphans)
      if (o.render !== undefined)
        o.render();
  }

}
