// 1.写一个 mySetInterVal(fn, a, b),每次间隔 a,a+b,a+2b 的时间，然后写一个 myClear，停止上面的 mySetInterVal
// 公司：头条

// 分类：JavaScript

// timer作为一个Object（timer不变，但每次计时器的值都会改变），用timer.id去标记每一次循环的计时器，clearTimeout时直接调用clearTimeout(timer.id)

const mySetInterVal = (fn, a, b) => {
  let timer = {};

  const start = (timeout) => {
    timer.id = setTimeout(() => {
      fn();
      start(timeout + b);
    }, timeout);
  };

  start(a);

  return timer;
};

const myTimer = mySetInterVal(() => console.log(new Date()), 1000, 1000);

const myClear = (timer) => {
  console.log(timer);
  if (timer) {
    clearTimeout(timer.id);
  }
};

setTimeout(() => {
  myClear(myTimer);
}, 5000);
