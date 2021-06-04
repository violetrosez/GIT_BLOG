/**
 * settimeout 模拟实现 setinterval(带清除定时器的版本)
 */

function myInterval(fn, wait) {
  let _fn = () => {
    fn();
    myInterval(fn, wait);
  };
  let timer = setTimeout(_fn, wait);

  myInterval.clear = () => {
    clearTimeout(timer);
  };
}

myInterval(() => {
  console.log(1);
}, 1000);

setTimeout(() => {
  myInterval.clear();
}, 5000);
