//Question: Write a function that returns a Promise. Chain three asynchronous operations using then and handle errors using catch.

function asyncOperation() {
  return new Promise((resolve, reject) => {
    // Asynchronous operation
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve('Operation successful');
      } else {
        reject('Operation failed');
      }
    }, 1000);
  });
}

asyncOperation()
  .then(result => {
    console.log(result);
    return 'Next operation';
  })
  .then(nextResult => {
    console.log(nextResult);
    throw new Error('An error occurred');
  })
  .catch(error => {
    console.error(error.message);
  });
