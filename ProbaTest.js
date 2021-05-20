const testUniform = (n) => {
  let res = [];
  for (let i = 0; i < n; i++)
    res.push(Proba.uniform());

  const avg = res.reduce( (acc, curr) => acc + curr, 0) / res.length;
  console.log("ProbaTest uniform() (avg):", avg);
}

const testPickUniformlyFrom = (n, array) => {
  let res = {};
  for (let i = 0; i < n; i++) {
    const x = Proba.pickUniformlyFrom(array);
    (res[x]) ? res[x]++ : res[x] = 1;
  }
  for (const state in res)
    res[state] = res[state] / n;

  console.log("ProbaTest pickUniformlyFrom(array) (array, res):", array, res);
}

const testPoisson = (n) => {
  let res = {};
  for (let i = 0; i < n; i++) {
    const x = Proba.poisson();
    (res[x]) ? res[x]++ : res[x] = 1;
  }

  for (const state in res)
    res[state] = res[state] / n;

  console.log("ProbaTest poisson() (res):", res);
}

const testPoissonDriven = (n, lambda, min, max, delay) => {
  let res = {};
  for (let i = 0; i < n; i++) {
    const x = Proba.poissonDriven(lambda, min, max, delay);
    (res[x]) ? res[x]++ : res[x] = 1;
  }

  for (const state in res)
    res[state] = res[state] / n;

  console.log("ProbaTest poissonDriven(lambda, min, max, delay) (res):", res);
}



testUniform(10000)
testPickUniformlyFrom(10000, [0,1,2,3])
testPoisson(10000)
testPoissonDriven(100000, 80, 100, 200, 100)
