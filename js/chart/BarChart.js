class BarChart {

  constructor(data) {
    this.data = data;
  }

  render() {
    let dy = 0
    let dataMax = Math.max(...data)
    textAlign(CENTER)
    background(51)
    fill(255)
    stroke(255)
    push()
    translate(90, 40)
    line(0, 0, 350, 0)
    line(0, 0, 0, 190)
    text('253 zombies', 175, -10)
    let i = 0
    textAlign(RIGHT)
    for (const d of data) {
      text('ligne '+(i+1), -5, dy+=26)
      rect(0, 13 + 26*i, 320 * data[i++] / dataMax, 17)
    }
    textAlign(CENTER)
    text(0, 0, -8)
    text(dataMax, 320, -8)
    pop()
  }

}
