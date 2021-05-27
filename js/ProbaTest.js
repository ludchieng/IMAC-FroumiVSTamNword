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

const testGenerateIndexWeightly = (n, array) => {
  let res = {};
  for (let i = 0; i < n; i++) {
    const x = Proba.generateIndexWeightly(array);
    (res[x]) ? res[x]++ : res[x] = 1;
  }
  for (const state in res)
    res[state] = res[state] / n;

  console.log("ProbaTest generateIndexWeightly(array) (array, res):", array, res);
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

const testNormal = (n, mean, deviation) => {
  let res = {};
  for (let i = 0; i < n; i++) {
    const x = (Proba.normal(mean, deviation) * 10).toFixed(0);
    (res[x]) ? res[x]++ : res[x] = 1;
  }

  for (const state in res)
    res[state] = res[state] / n;

  console.log("ProbaTest normal() (res):", res);
}

const testNormalDriven = (n, mean, deviation, min, max) => {
  let res = {};
  for (let i = 0; i < n; i++) {
    const x = (Proba.normalDriven(mean, deviation, min, max) * 10).toFixed(0);
    (res[x]) ? res[x]++ : res[x] = 1;
  }

  for (const state in res)
    res[state] = res[state] / n;

  console.log("ProbaTest normalDriven() (res):", res);
}



testUniform(10000)
testPickUniformlyFrom(10000, [0,1,2,3])
testGenerateIndexWeightly(10000, [10, 30, 20, 25, 15])
testPoisson(10000)
testPoissonDriven(100000, 80, 100, 200, 100)
testNormal(1000000, 0, 1)
testNormalDriven(1000000, 0, 1, -3, 3)
