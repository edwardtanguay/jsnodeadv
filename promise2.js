const fs = require('fs');
const { promisify } = require('util');
const writeFile = promisify(fs.writeFile);
const unlink = promisify(fs.unlink);
const delay = (seconds) => new Promise((resolves) => {
	setTimeout(resolves, seconds * 1000);
});
const beep = () => process.stdout.write("\x07");


const sequentialManager = () => Promise.resolve()
	.then(() => console.log('waiting 1 second'))
	.then(() => delay(1))
	//.then(beep)
	.then(() => 'creating file')
	.then(console.log)
	.then(() => writeFile('temp004.txt', 'testing'))
	.then(() => console.log('waiting 4 seconds before deleting'))
	.then(() => delay(4))
	.then(() => unlink('temp004.txt'))
	.then(() => console.log('file deleted'));

const squentialManager2 = async () => {
	console.log('waiting 1 second');
	await delay(1);
	console.log('creating file');
	await writeFile('temp004.txt', 'testing');
	console.log('waiting 4 seconds before deleting');
	await delay(4);
	await unlink('temp004.txt');
	console.log('file deleted');
};

(() => Promise.resolve()
	.then(() => sequentialManager())
	.then(() => squentialManager2())
)();