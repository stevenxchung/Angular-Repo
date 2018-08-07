// Why do we use RxJS?
// RxJS is all about getting any kind of callback in JS and representing that as a collection, then you can operate on that collection.

// Example 1: Callbacks
const myElem = document.querySelector('#myElem');

function consoleLogClick(x) {
  console.log(`clicked! $(x)`);
}

myElem.addEventListener('click', consoleLogClick);

// Example 2: Arrays
const arr = [10, 20, 30, 40, 50, 60];

console.log('before');
arr.forEach(function cb(x) {
  console.log(x);
});
console.log('after');
