/**
 * let data = {a:2}
 * 给data加一个属性b，值永远是a的两倍，随着a变化
 */

let data = { a: 2 };
Object.defineProperty(data, "b", {
  get() {
    return data.a * 2;
  },
});
console.log(data.b);
data.a = 3;
console.log(data.b);
