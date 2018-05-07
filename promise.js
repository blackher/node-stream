// test.js
setTimeout(() => console.log(1));
setImmediate(() => console.log(2));
process.nextTick(() => console.log(3));
Promise.resolve(console.log(11)).then(() => console.log(4));
(() => console.log(5))();


// 11 5 3 4 2 1



//同步 -->异步-->nextTick--->event loop (timer  io  poll)

