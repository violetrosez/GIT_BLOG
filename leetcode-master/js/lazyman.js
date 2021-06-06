// 实现一个LazyMan，可以按照以下方式调用:
// LazyMan(“Hank”)输出:
// Hi! This is Hank!

// LazyMan(“Hank”).sleep(10).eat(“dinner”)输出
// Hi! This is Hank!
// //等待10秒..
// Wake up after 10
// Eat dinner~

// LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出
// Hi This is Hank!
// Eat dinner~
// Eat supper~

// LazyMan(“Hank”).eat(“supper”).sleepFirst(5)输出
// //等待5秒
// Wake up after 5
// Hi This is Hank!
// Eat supper
class LazyMan {
  constructor(name) {
    this.name = name;
    this.cb = [];
    this.cb.push(() => {
      console.log(`Hi! This is ${this.name}!`);
      this.cb.shift();
    });
    setTimeout(async () => {
      while (this.cb[0]) {
        await this.cb[0]();
      }
    }, 0);
  }

  eat(param) {
    this.cb.push(() => {
      console.log(`Eat ${param}~`);
      this.cb.shift();
    });
    return this;
  }
  sleep(wait) {
    this.cb.push(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          this.cb.shift();
          resolve();
        }, wait * 1000);
      });
    });
    return this;
  }
  sleepFirst(wait) {
    this.cb.unshift(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          this.cb.shift();
          resolve();
        }, wait * 1000);
      });
    });
    return this;
  }
}

// new LazyMan("Hank").sleep(3).eat("dinner");

// new LazyMan("Hank").eat("dinner").eat("supper");

new LazyMan("Hank").eat("lunch").sleepFirst(3).sleep(3).eat("dinner");
