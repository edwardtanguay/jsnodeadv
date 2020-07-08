const delay = (callback, seconds) => {
	setTimeout(() => { callback(seconds)}, seconds * 1000);
};

console.log('stand');
delay((seconds) => { console.log(`and now this after ${seconds} seconds`) }, 4);
delay((seconds) => { console.log(`done with delay after ${seconds} seconds`) }, 2);
delay((seconds) => { console.log(`${seconds} seconds over`) }, 3);
console.log('end');