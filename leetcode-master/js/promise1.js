// 题目描述:JS 实现一个带并发限制的异步调度器 Scheduler，保证同时运行的任务最多有两个
//  addTask(1000,"1");
//  addTask(500,"2");
//  addTask(300,"3");
//  addTask(400,"4");
//  的输出顺序是：2 3 1 4

//  整个的完整执行流程：

// 一开始1、2两个任务开始执行
// 500ms时，2任务执行完毕，输出2，任务3开始执行
// 800ms时，3任务执行完毕，输出3，任务4开始执行
// 1000ms时，1任务执行完毕，输出1，此时只剩下4任务在执行
// 1200ms时，4任务执行完毕，输出4

class Scheduler {
  constructor(len) {
    this.quene = [];
    this.max = len;
  }

  addTask(wait, param) {
    let i = this.quene.length;
    let genPromise = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(param);
          resolve(i);
        }, wait);
      });
    };

    this.quene.push(genPromise);
  }

  run() {
    let race = this.quene.splice(0, 2).map((f) => f());
    let p = Promise.race(race);

    for (let index = 0; index < this.quene.length; index++) {
      p = p.then((x) => {
        race[x] = this.quene[index].call(this);
        return Promise.race(race);
      });
    }
  }
}

const scheduler = new Scheduler(2);

scheduler.addTask(1000, "1");
scheduler.addTask(500, "2");
scheduler.addTask(300, "3");
scheduler.addTask(400, "4");
scheduler.run();
