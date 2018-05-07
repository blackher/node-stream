let Stream = require('stream');


let writeable = Stream.Writable({
  write: function (data,_,next) {
    console.log(data);
    process.nextTick(next);//next(err) 声明写入已完成 可以开始写入下一个数据。

  }
})
writeable.write('a');
writeable.write('b');
writeable.end();
//
