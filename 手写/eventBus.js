/*
 * @FilePath: \GIT\eventBus.js
 * @Author: huangzq
 * @Date: 2021-04-12 09:08:18
 * @LastEditors: huangzq
 * @LastEditTime: 2021-04-12 16:42:06
 *
 */
class eventBus {
  constructor() {
    this.eventMap = {};
  }
  on(name, cb) {
    if (this.eventMap[name] == undefined) {
      this.eventMap[name] = [];
      this.eventMap[name].push(cb);
    } else {
      this.eventMap[name].push(cb);
    }
  }
  off(name, cb) {
    if (!this.eventMap[name]) return;
    this.eventMap[name].forEach((e, i) => {
      if (e == cb) {
        this.eventMap[name].splice(i, 1);
      }
    });
  }
  // 执行一次
  once(name, cb) {
    let fn = (...args) => {
      cb(...args);
      this.off(name, fn);
    };
    this.on(name, fn);
  }
  emit(name, ...args) {
    if (!this.eventMap[name]) return;
    let events = this.eventMap[name].slice();

    events.forEach((cb) => {
      cb(...args);
    });
  }
}
// 测试
let eb = new eventBus();
let fn1 = function (name, age) {
  console.log(`${name} ${age}`);
};
let fn2 = function (name, age) {
  console.log(`hello, ${name} ${age}`);
};
let fn3 = function (name, age) {
  console.log(`once, ${name} ${age}`);
};
eb.once("aaa", fn3);
eb.on("aaa", fn1);
eb.on("aaa", fn2);
eb.emit("aaa", "布兰", 11111);
// eb.emit("aaa", "布兰", 22222);
eb.off("aaa", fn2);
console.log("------------------------------");
eb.emit("aaa", "布兰", 33333);
