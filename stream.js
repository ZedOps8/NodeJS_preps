const fs = require('fs');

const readStream = fs.createReadStream('largeFile.txt');
const writeStream = fs.createWriteStream('newFile.txt');

readStream.pipe(writeStream);

writeStream.on('finish', () => {
  console.log('File write completed');
});
