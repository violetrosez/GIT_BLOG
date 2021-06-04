/**
 * callapi
 *
 */

function callApi() {
  return new Promise(() => {});
}

/**
 * 函数curry
 */

const add = function (a, b, c, d) {
  return a + b + c + d;
};

let curry = (fn) => {
  let c = (...args) => {
    let context = this;
    return args.length >= fn.length
      ? fn.apply(context, args)
      : (..._args) => c(...args, ..._args);
  };
  return c;
};

console.log(curry(add)(1)(2)(3)(4));
