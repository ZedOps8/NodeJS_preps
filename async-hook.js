

//Question: Utilize the async_hooks module to trace the execution of asynchronous operations in a Node.js script.

const async_hooks = require('async_hooks');

const hooks = {
  init(asyncId, type, triggerAsyncId, resource) {
    console.log(`Init: ${type} with ID ${asyncId}`);
  },
  before(asyncId) {
    console.log(`Before: ${asyncId}`);
  },
  after(asyncId) {
    console.log(`After: ${asyncId}`);
  },
  destroy(asyncId) {
    console.log(`Destroy: ${asyncId}`);
  }
};


