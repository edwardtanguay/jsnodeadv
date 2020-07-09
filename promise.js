const delay = (seconds) => new Promise((resolves, rejects) => {
	if (seconds > 3) {
		//throw new Error('bad data error');
		rejects(new Error(`${seconds} is too long`));
	} else {
		setTimeout(() => { resolves(seconds) }, seconds * 1000);
	}
});

delay(3)
	.then((text) => {
		console.log(text);
		return 'output from processing step 1';
	})
	.then((text) => {
		console.log(text);
		return 'output from processing step 2';
	})
	.then(console.log)
	.catch((error) => console.log(`err: ${error.message}`));