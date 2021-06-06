let curry = (fn,...args) => args.length >= fn.length ? fn.apply(this,args) : (...arg)=> curry(fn,...args,...arg)
  

// 用法如下：
const add = (a, b, c) => a + b + c;
const a = curry(add);
console.log(a(1)(2)(3));
