/**
 * 使用promise.race取消请求
 * @param {*} pro
 * @returns
 */
function wrap(pro) {
  let obj = {};
  // 构造一个新的promise用来竞争
  let p1 = new Promise((resolve, reject) => {
    obj.resolve = resolve;
    obj.reject = reject;
  });

  obj.promise = Promise.race([p1, pro]);
  return obj;
}

let testPro = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(123);
  }, 1000);
});

let wrapPro = wrap(testPro);
wrapPro.promise.then((res) => {
  console.log(res);
});
wrapPro.resolve("被拦截了");
