var Stream = require('stream')
const fs = require('fs')
const rs = fs.createWriteStream("123.txt");
var source = ['a', 'b', 'c','sd']
var readable = Stream.Readable({
  read: function () {
    var data = source.shift() || null
    console.log('push', data)
    this.push(data)
  },
})

readable.on('end', function () {
  console.log('read end')
})

readable.on('data', function (data) {
  //消费数据 flowing 模式
  /*
  调用resume方法
  如果之前未调用pause方法进入paused模式，则监听data事件也会调用resume方法。
  readable.pipe(writable)。pipe中会监听data事件。

  */

  rs.write(data,function(err,data)){
  	console.log('write',data);
    if(err){
      readable.pause();
    }
  });
  rs.on('prefinish',function(){
	console.log('prefinish');
});
})
