/**
 * N秒内执行一次
 * @param {*} fn 节流函数
 * @param {*} wait 时间
 */
function throttle(fn, wait) {
  let startTime = +Date.now();
  let timer;
  return function () {
    let context = this;
    let curTime = +Date.now();
    var remaining = wait - (curTime - startTime);
    clearTimeout(timer);
    if (remaining <= 0) {
      fn.apply(context, arguments);
      startTime = +Date.now();
    } else {
      timer = setTimeout(() => {
        fn.apply(context, arguments);
      }, remaining);
    }
  };
}

function test(p) {
  console.log(p);
}

let fn = throttle(test, 3000);
fn(1);
// fn(3);
setTimeout(() => {
  fn(2);
}, 4000);
