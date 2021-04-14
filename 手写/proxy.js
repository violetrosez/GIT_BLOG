let obj = {
  name: "abc",
};
let p = new Proxy(obj, {
  get() {
    console.log("get");
  },
  set(obj, prop, value) {
    obj[prop] = value;
    console.log("set:" + value);
  },
});
p.age = 10;
console.log(obj.age);
