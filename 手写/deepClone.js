/*
 * @FilePath: \GIT\deepClone.js
 * @Author: huangzq
 * @Date: 2021-04-09 15:47:05
 * @LastEditors: huangzq
 * @LastEditTime: 2021-04-09 16:31:23
 */
function forEach(arr, callback) {
  if (arr.length == 0) return;
  let idx = 0;
  while (idx < arr.length) {
    callback(arr[idx], idx);
    idx++;
  }
}
function deepClone(target, weakmap = new WeakMap()) {
  if (typeof target == "object") {
    let clone = Array.isArray(target) ? [] : {};
    if (weakmap.get(target)) return weakmap.get(target);
    weakmap.set(target, clone);
    let keys = Array.isArray(target) ? undefined : Object.keys(target);
    forEach(keys || target, (val, key) => {
      if (keys) {
        key = val;
      }
      clone[key] = deepClone(target[key], weakmap);
    });
    return clone;
  } else {
    return target;
  }
}

const target = {
  field1: 1,
  field2: undefined,
  field3: {
    child: "child",
  },
  field4: [2, 4, 8],
  f: {
    f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: {} } } } } } } } } } },
  },
};

target.target = target;

console.log(deepClone(target));
