// Understand Reactive Programming using RxJS
// What is an event stream?
// An event stream is a sequence of ongoing events ordered in time which can emit three things:
// a value, error, or complicated signal.

// Synchronous
console.clear();
let source = ['1', '1', 'foo', '2', '3', '5', 'bar', '8', '13'];
let result = source;
console.log(result);

// Asynchronous
console.clear();
let source = Rx.Observable.interval(400)
  .take(9)
  .map(i => ['1', '1', 'foo', '2', '3', '5', 'bar', '8', '13'][i]);
let result = source;
console.log(result);
