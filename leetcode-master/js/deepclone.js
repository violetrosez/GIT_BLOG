function deepClone(obj, weakmap = new WeakMap()) {
  if (typeof obj !== "object" || obj == null) {
    return obj;
  }
  if (weakmap.has(obj)) {
    return weakmap.get(obj);
  }
 
  let target = Array.isArray(obj) ? [] : {};
  // 解决循环引用问题
  weakmap.set(obj, target);

  Object.keys(obj).forEach((key) => {
    if (typeof obj == "object" && obj !== null) {
      target[key] = deepClone(obj[key]);
    } else {
      target[key] = obj[key];
    }
  });
  return target;
}

var obj1 = {
  a: 1,
  b: { a: 2 },
};
var obj2 = deepClone(obj1);
console.log(obj1);
