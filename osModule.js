//Question: Use the os module to print information about the current operating system (e.g., platform, architecture, and free memory).

const os = require('os');

console.log(`Platform: ${os.platform()}`);
console.log(`Architecture: ${os.arch()}`);
console.log(`Free Memory: ${os.freemem()} bytes`);
