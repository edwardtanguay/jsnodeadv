const fs = require('fs');
const { promisify } = require('util');

const writeFile = promisify(fs.writeFile);

const texts = [
	{
		fileName: 'test001.txt',
		content: 'this is the content of 001.'
	},
	{
		fileName: 'badfolder/test002.txt',
		content: 'this is the content of 002.'
	},
	{
		fileName: 'test003.txt',
		content: 'this is the content of 003.'
	}
];

texts.forEach(text => {
	writeFile(text.fileName, text.content)
		.then(() => console.log('file created'))
		.catch((error) => console.log(`error creating file: ` + error.message));
});
