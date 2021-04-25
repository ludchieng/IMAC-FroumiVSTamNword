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
  }

}
