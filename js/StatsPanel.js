class StatsPanel {

  constructor() {
    
  }

  render() {
    this.renderCounts();
    this.renderHorizontalBarChart();
    this.renderLineChart(stats.sunflowerGainDuration, 70, 560);
    this.renderLineChart(stats.zombiesCountByGroup, 480, 560);
    textAlign(RIGHT);
    textSize(15)
    fill(255);
    text('Temps production', 415, 380);
    text('des tournesols', 415, 400);
    text('Nb de tamanoirs', 815, 380);
    text('par groupe', 815, 400);
  }

  renderCounts() {
    let dy = 0;
    background(51);
    textSize(48);
    textAlign(CENTER);
    fill(255,255,255);
    text("GAME OVER", width/2, 70);

    push();
      dy = 0;
      translate(60, 90);
      textAlign(LEFT);
      textSize(16);
      fill('#888');
      text("Score", 0, dy+=18);
      fill('#fff');
      textSize(32);
      text("Round #" + zombiesArmy.zCounter.roundNumber(), -2, dy+=38);
      textSize(24);
      text("Vague #" + zombiesArmy.zCounter.waveNumber(), 0, dy+=30);
    pop();

    push();
      dy = 0;
      translate(80, 190);
      textSize(16);
      textAlign(LEFT);
      text("tamanoirs normaux", 7, dy+=22);
      text("tamanoirs enragés", 7, dy+=22);
      text("tournesols", 7, dy+=28);
      text("shooters normaux", 7, dy+=22);
      text("shooters enragés", 7, dy+=22);
      text("rochers", 7, dy+=22);
      dy = 0
      textAlign(RIGHT);
      fill('#6af');
      text(stats.zNormalCount, 0, dy+=22);
      text(stats.zEnragedCount, 0, dy+=22);
      text(stats.sunflowersCount, 0, dy+=28);
      text(stats.shootersNormalCount, 0, dy+=22);
      text(stats.shootersEnragedCount, 0, dy+=22);
      text(stats.tanksCount, 0, dy+=22);
    pop();

  }

  renderHorizontalBarChart() {
    let dy = 0;
    let data = stats.zombiesSpawnLine;
    let dataMax = Math.max(...data);
    push();
    textAlign(CENTER);
    textSize(15)
    fill(255);
    stroke(255);
    translate(390, 130);
    line(0, 0, 350, 0);
    line(0, 0, 0, 205);
    noStroke();
    text((stats.zEnragedCount + stats.zNormalCount) + ' tamanoirs', 175, -10);
    textAlign(RIGHT);
    for (let i = 0; i < data.length; i++) {
      text('ligne '+(i+1), -5, dy+=28);
      rect(0, 13 + 28*i, 320 * data[i] / dataMax, 17);
    }
    textAlign(CENTER);
    text(0, 0, -8);
    text(dataMax, 320, -8);
    pop();
  }

  renderLineChart(rawData, tx, ty) {
    const data = this.cleanDataObject(rawData);
    const labels = Object.keys(data).map((e) => +e);
    const values = Object.values(data);
    const valueMax = Math.max(...values);
    push();
    translate(tx, ty)
    
    textAlign(CENTER);
    textSize(15)
    fill(255);
    stroke(255);
    line(0, 0, 350, 0);
    line(0, 0, 0, -180);
    
    textAlign(RIGHT);
    noStroke()
    text(0, -8, 13)
    text(valueMax, -8, -160)
    text(labels[0], 20, 18)
    text(labels[parseInt(labels.length/2)], 180, 18)
    text(labels[labels.length-1], 340, 18)
    
    noFill();
    stroke(255);
    let dx = 10;
    beginShape();
    for (const v of values) {
      vertex(dx, -160 * v / valueMax);
      dx+=355/values.length
    }
    endShape();
    
    pop();
  }

  cleanDataObject(data) {
    let labels = Object.keys(data).map((e) => +e);
    let minMaxDifference = labels[labels.length-1] - labels[0];
    for (let i = labels.length; minMaxDifference < 3 || minMaxDifference % 2 == 1; i++) {
      data[labels[i-1]+1] = 0;
      labels = Object.keys(data).map((e) => +e);
      minMaxDifference = labels[labels.length-1] - labels[0];
    }
    for (let cursor = labels[0]; cursor !== labels[labels.length-1]; cursor++)
      if (data[cursor] === undefined)
        data[cursor] = 0;
    return data;
  }

}
