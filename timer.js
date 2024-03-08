const durationInSeconds = 5;
let secondsElapsed = 0;

const timer = setInterval(() => {
  console.log(`Seconds elapsed: ${++secondsElapsed}`);
  if (secondsElapsed === durationInSeconds) {
    clearInterval(timer);
    console.log('Timer complete!');
  }
}, 1000);
