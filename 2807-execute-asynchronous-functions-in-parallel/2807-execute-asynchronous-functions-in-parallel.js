/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
const promiseAll = (fns) => {
  return new Promise((resolve, reject) => {
    let ready = 0,
        results = new Array(fns.length).fill(undefined);
    for (const i in fns) {
      fns[i]()
        .then((result) => {
          results[i] = result;
          if (++ready === fns.length) resolve(results);
        })
        .catch((err) => {
          reject(err);
        })
    }
  });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */