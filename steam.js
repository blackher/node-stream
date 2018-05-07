var Stream = require('stream')
const fs = require('fs')
const rs = fs.createWriteStream("123.txt");
var source = ['a', 'b', 'c']
var readable = Stream.Readable({
  read: function () {
    var data = source.shift() || null
    console.log('push', data)
    this.push(data)
  },
})

readable.on('end', function () {
  console.log('end')
})

readable.on('data', function (data) {
  console.log('data', data);
  rs.write(data);
})