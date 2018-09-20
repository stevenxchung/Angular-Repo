import {
    Observable,
    fromEvent,
    AsyncSubject,
    merge,
    from,
    Subject,
    interval
} from 'rxjs';
import { share, map, pluck, skipUntil } from 'rxjs/operators';

// #################################
// ########## Observables ##########
// #################################

// let observable = Observable.create((observer: any) => {
//     try {
//         observer.next('Hey guys!');
//         observer.next('How are you?');
//         setInterval(() => {
//             observer.next("I'm good");
//         }, 2000);
//     } catch (err) {
//         observer.error(err);
//     }
// }).pipe(share());

// let observer1 = observable.subscribe(
//     (x: any) => addItem(x),
//     (error: any) => addItem(error),
//     () => addItem('Completed')
// );

// setTimeout(() => {
//     let observer2 = observable.subscribe(
//         (x: any) => addItem('Subscriber 2: ' + x)
//     )
// }, 1000);

// let observable = fromEvent(document, 'mouseover');

// setTimeout(() => {
//     let subscription = observable.subscribe((x: any) => {
//         addItem(x);
//         console.log(x);
//     });
// }, 2000);

// ##############################
// ########## Subjects ##########
// ##############################

// let subject = new AsyncSubject();

// subject.subscribe(
//     data => addItem('Observer 1: ' + data),
//     err => addItem(err),
//     () => addItem('Observer 1 Completed!')
// );

// let i = 1;
// let int = setInterval(() => subject.next(i++), 100);

// setTimeout(() => {
//     let observer2 = subject.subscribe(data => addItem('Observer 2: ' + data));
//     subject.complete();
// }, 500);

// ###############################
// ########## Operators ##########
// ###############################

// let observable1 = Observable.create((observer: any) => {
//     observer.next('Hey guys!');
// });

// let observable2 = Observable.create((observer: any) => {
//     observer.next("How's it going?");
// });

// let newObs = merge(observable1, observable2);

// newObs.subscribe((x: any) => addItem(x));

// Observable.create((observer: any) => {
//     observer.next('Hey guys!');
// }).pipe(
//     map((val: any) => val.toUpperCase())
// ).subscribe((x: any) => addItem(x));

// from([
//     { first: 'Gary', last: 'Simon', age: 34 },
//     { first: 'Jane', last: 'Simon', age: 34 },
//     { first: 'John', last: 'Simon', age: 34 }
// ])
//     .pipe(pluck('first'))
//     .subscribe((x: any) => addItem(x));

let observable1 = Observable.create((data: any) => {
    let i = 1;
    setInterval(() => {
        data.next(i++);
    }, 1000);
});

let observable2 = new Subject();

setTimeout(() => {
    observable2.next('Hey!');
}, 5000);

let newObs = observable1.pipe(skipUntil(observable2));

newObs.subscribe((x: any) => addItem(x));

function addItem(val: any) {
    var node = document.createElement('li');
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById('output').appendChild(node);
}
