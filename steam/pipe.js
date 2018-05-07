
/*
pipe   
多个流之间 


*/


var Stream = require('stream')
var fs = require('fs')
var readable = createReadable()
var writable = createWritable()

readable.pipe(writable).on('finish', function () {
  console.log('done')
})






function createWritable() {

  return fs.createWriteStream("123.txt");

  // return Stream.Writable({
  //   write: function (data, _, next) {
  //     console.log(data)
  //     next()
  //   },
  // })


}

function createReadable() {
  var source = ['a', 'b', 'c','d','d']

  return Stream.Readable({
    read: function () {
      process.nextTick(this.push.bind(this), source.shift() || null)

    },
  })
}