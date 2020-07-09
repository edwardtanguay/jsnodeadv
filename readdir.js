const fs = require('fs');
const { promisify } = require('util');
const readdir = promisify(fs.readdir);

async function getFiles() {
	const files = await readdir(__dirname);
	return files;
}

getFiles()
	.then((files) => {
		console.log(`We got ${files.length} files:`);
		let count = 1;
		files.forEach(file => {
			console.log(`>>> ${count}. ${file}`);
			count++;
		});
	});

