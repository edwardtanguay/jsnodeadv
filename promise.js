const delay = (seconds) => new Promise((resolves, rejects) => {
	setTimeout(() => {resolves(seconds)}, seconds * 1000);
});

delay(4).then((seconds) => console.log(`another delay ended after ${seconds} seconds`));
delay(2).then((seconds) => console.log(`delay ended after ${seconds} seconds`));