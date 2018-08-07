// Why do we use RxJS?
// RxJS is all about getting any kind of callback in JS and representing that as a collection, then you can operate on that collection.

// Example 1: Callbacks
const myElem = document.querySelector('#myElem');

function consoleLogClick(x) {
  console.log(`clicked! ${x}`);
}

myElem.addEventListener('click', consoleLogClick);

// Example 2: Arrays
const arr = [10, 20, 30, 40, 50, 60];

console.log('before');
arr.forEach(function cb(x) {
  console.log(x);
});
console.log('after');

// Example 3: Promises
const res = fetch(
  'https://jsonplaceholder.typicode.com/users/1'
).then(r => r.json());

function successCallback(value) {
  console.log(`We got back ${value}`);
}

function failureCallback(err) {
  console.error(`:( ${err}`);
}

res.then(successCallback, failureCallback);

// Example 4: Node.js Streams
const readable = getReadableStreamSomehow();

function nextDataCallback(chunk) {
  console.log(`Received ${chunk.length} bytes of data`);
}

function errorCallback(err) {
  console.error(`Bad stuff happened: ${err}.`);
}

function doneCallback() {
  console.log('There will be no more data.');
}

readable.on('data', nextDataCallback);
readable.on('error', errorCallback);
readable.on('end', doneCallback);

// Example: Generic API - Step 1
function nextCallback(data){
  console.log(data);
}

function errorCallback(err) {
  console.log(err);
}

function completeCallback() {
  console.log('done');
}

function giveMeSomeData(nextCB, errorCB, completeCB) {
  // Click event example
  // document.addEventListener('click', nextCB);
  // Fetch url example
  // fetch(url).then(nextCB, errorCB);
  [10, 20, 30].forEach(nextCB);
}

// Invoking giveMeSomeData()
giveMeSomeData(
  nextCallback,
  errorCallback,
  completeCallback
);
