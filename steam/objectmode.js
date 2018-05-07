/*
objectMode true 
push  任意格式数据流格式
false
push  buffer string null undefied 


*/

const Stream = require('stream')
const fs = require('fs')
const rs = fs.createWriteStream("123.txt");
var source = ['a', 'b', 'c','d']
var readable = Stream.Readable({
  objectMode:true,	
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
  rs.write(data,function(){
  	console.log('write',data);
  });
  rs.on('prefinish',function(){
	console.log('prefinish');
});
})
