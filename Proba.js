const Proba = {
  uniform: () => {
    return Math.random();
  },

  pickUniformlyFrom: (array) => {
    const count = array.length;
    const probability = 1 / count;
    const rand = Math.random();
    const index = Math.floor(rand / probability);
    return array[index];
  },

  poisson: (lambda) => {
    let L = Math.pow(Math.E, -lambda);
    let k = 0;
    let p = 1;
    do {
      k++;
      p = p * Proba.uniform();
    } while (p > L)
    return k - 1;
  },

  poissonDriven: (lambda, min, max, delay) => {
    return Math.min(max, Math.max(min, delay + Proba.poisson(lambda)));
  },

}
