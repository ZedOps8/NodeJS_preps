const fs = require('fs');

fs.writeFile('output.txt', 'This is some content.', (err) => {
  if (err) throw err;
  console.log('File has been written');
});
