console.log('A');

setTimeout(() => console.log('B'), 0);//schedules a macrotask with0ms delay -placed in the macrotask queue to be executed after the current stack and any microtasks

Promise.resolve().then(()=> console.log('C'));//creates a resolved promise, the .then() callback is a microtask scheduled to be executed after the current synchronous code

console.log('D');
//ADCB
/
