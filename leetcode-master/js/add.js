// 题目描述:实现一个 add 方法 使计算结果能够满足如下预期：
// add(1)(2)(3)()=6
// add(1,2,3)(4)()=10
// 无限参数
function add(...args) {
  let _arg = [...args];
  function fn(...arg) {
    _arg = [..._arg, ...arg];
    return fn;
  }
  fn.toString = function () {
    return _arg.reduce((pre, cur) => pre + cur);
  };
  //   fn.valueOf = function () {
  //     return _arg.reduce((pre, cur) => pre + cur);
  //   };
  return fn;
}
console.log(add(1)(2)(3)());
