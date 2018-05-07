//extends duplex

const Stream = require('stream');

let transform = Stream.Transform({
  transform:function(data,_,next){
    next(null,data.toString().toUpperCase());//next会调用push方法
    /* === this.push(data.toString().toUpperCase());
          next();

    */
  }
})
transform.pipe(process.stdout);


transform.write('a');

transform.write('b');

transform.write('a');
transform.end('c');
