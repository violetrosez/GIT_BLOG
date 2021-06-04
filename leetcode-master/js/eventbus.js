/**
 * 发布订阅
 */
class EventBus {
  constructor() {
    this.pool = {};
  }
  /**
   * 订阅
   * @param {*} name
   * @param {*} fn
   */
  on(name, fn) {
    if (this.pool[name]) {
      this.pool[name].push(fn);
    } else {
      this.pool[name] = [];
      this.pool[name].push(fn);
    }
    return this;
  }
  /**
   * 发布
   * @param {*} name 事件名
   * @param  {...any} args 参数
   */
  emit(name, ...args) {
    if (this.pool[name]) {
      let i = 0;
      while (i < this.pool[name].length) {
        this.pool[name][i].apply(this, args);
        i++;
      }
    }
    return this;
  }
  /**
   * 注销
   * @param {*} name
   * @param {*} fn
   */
  off(name, fn) {
    if (this.pool[name]) {
      this.pool[name].forEach((e, i) => {
        if (e == fn) {
          this.pool[name].splice(i, 1);
        }
      });
    }
  }

  once(name, fn) {
    let _fn = () => {
      fn();
      this.off(name, _fn);
    };
    this.on(name, _fn);
    return this;
  }
}

// 使用如下
const eb = new EventBus();

const handle = (...rest) => {
  console.log(rest);
};

eb.on("click", handle);

eb.emit("click", 1, 2, 3, 4);

eb.off("click", handle);

eb.emit("click", 1, 2);

eb.once("dbClick", () => {
  console.log(123456);
});
eb.emit("dbClick");
eb.emit("dbClick");
