const fs = require('fs');

const timeoutScheduled = Date.now();
console.log(`${timeoutScheduled}t ms`);
// 异步任务一：100ms 后执行的定时器
setImmediate(() => {
  const delay = Date.now() - timeoutScheduled;
  console.log(`${delay}ms`);
}, 100);

// 异步任务二：至少需要 200ms 的文件读取
fs.readFile('test.js', () => {
	console.log('test');
  const startCallback = Date.now();
  while (Date.now() - startCallback < 200) {
    // 什么也不做

  }
});