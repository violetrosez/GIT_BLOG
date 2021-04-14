/*
 * @FilePath: \GIT\imgLoad.js
 * @Author: huangzq
 * @Date: 2021-04-12 17:45:45
 * @LastEditors: huangzq
 * @LastEditTime: 2021-04-13 10:54:25
 * 限制最大加载数
 */
let array = new Array(20).fill(0).map((e, i) => {
  return i;
});

function mock(e) {
  return new Promise((resolve, reject) => {
    console.log(e + "---开始---");
    setTimeout(() => {
      console.log(e + "---结束---");
      resolve(e);
    }, Math.random() * 1000);
  });
}
function limitLoad(array, limit) {
  //   array = mock(array);
  let arr = array.splice(0, limit).map((e) => {
    return mock(e).then(() => {
      return e;
    });
  });
  let p = Promise.race(arr);
  for (let index = 0; index < array.length; index++) {
    p = p.then((e) => {
      //   console.log(e);
      arr[e] = mock(array[index]).then(() => {
        return e;
      });
      return Promise.race(arr);
    });
  }
}
// mock(array);
limitLoad(array, 3);
