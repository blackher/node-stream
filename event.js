const EventEmitter = require('events');

let emitter = new EventEmitter();

emitter.on('myEvent', () => {
  console.log('hi 1');
});

emitter.on('myEvent', () => {
  console.log('hi 2');
});

emitter.emit('myEvent');


emitter.on('myEvent', () => {
  console.log('hi');
  emitter.emit('myEvent');
});

emitter.emit('myEvent');


// emitter.on('myEvent', function sth () {
//   emitter.on('myEvent', sth);
//   console.log('hi');
// });

// emitter.emit('myEvent');
function test() { 
  setTimeout(() => test(), 0);
}
test();