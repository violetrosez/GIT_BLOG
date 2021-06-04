/**
 * 实现：调用一次f 顺序打印出字符串a的一个字符
 * "abc" -> a -> b -> c
 * @param {*} str
 * @returns
 */

// // 1.闭包
// function logCharAt(str) {
//   let i = 0;
//   return function () {
//     console.log(str.charAt(i++));
//   };
// }

// let f = logCharAt("hello");
// f();
// f();
// f();
// f();
// f();

// 2.生成器
function* gen(str) {
  for (let index = 0; index < str.length; index++) {
    yield console.log(str.charAt(index));
  }
}
let f = gen("hello");
f.next();
f.next();
f.next();
f.next();
f.next();
