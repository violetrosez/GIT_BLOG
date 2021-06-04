/**
 *
 * 创建一个空的简单JavaScript对象（即{}）；
 * 链接该对象（设置该对象的constructor）到另一个对象 ；
 * 将步骤1新创建的对象作为this的上下文 ；
 * 如果该函数没有返回对象，则返回this。
 * @param {*} fn 构造函数
 * @param  {...any} args 参数
 */
function myNew(fn, ...args) {
  if (typeof fn !== "function") throw new TypeError();
  let obj = Object.create(fn.prototype);
  let res = fn.call(obj, ...args);
  return typeof res == "object" ? res : obj;
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.say = function () {
  console.log(this.age);
};
let p1 = myNew(Person, "lihua", 18);
console.log(p1.name);
console.log(p1);
p1.say();
