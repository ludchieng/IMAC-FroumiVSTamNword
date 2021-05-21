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
    /**
     * Knuth algorithm
     * Knuth, Donald Ervin (1997), Seminumerical Algorithms,
     * The Art of Computer Programming, 2 (3rd ed.),
     * Addison Wesley, ISBN 978-0-201-89684-8
     */
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

  normal: (mean, deviation) => {
    /**
     * Box-Muller algorithm
     * George E. P. Box, Mervin E. Muller, « A Note on
     * the Generation of Random Normal Deviates »,
     * The Annals of Mathematical Statistics Vol. 29, No. 2
     * (Jun., 1958), pp. 610-611
     * DOI:10.1214/aoms/1177706645, JSTOR:2237361
     */
    return Math.pow(
        -2 * Math.log(Proba.uniform())
        , .5
      )
      * Math.cos(2*Math.PI*Proba.uniform())
      * deviation
      + mean;
  },

  normalDriven: (mean, deviation, min, max) => {
    return Math.min(max, Math.max(min, Proba.normal(mean, deviation)));
  }

}
