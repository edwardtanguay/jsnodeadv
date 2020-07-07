function hideString(str, callback) {
	process.nextTick(() => {
		callback(str.replace(/[a-zA-Z]/g, '*'));
	});
	
}

hideString("Hello World", (hidden) => {
	console.log(hidden);
});

console.log('end');


