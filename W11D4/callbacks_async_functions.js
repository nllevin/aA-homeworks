// Asynchronous Functions to Run in Browser Console

const setTimeout = function () {
  window.setTimeout(() => alert('HAMMERTIME'), 5000);
};

const hammerTime = function (time) {
  window.setTimeout(() => alert(`${time} is hammertime!`), time);
};

// Node Environment

readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const teaAndBiscuits = function () {
  readline.question('\nWould you like some tea?\n', firstAns => {
    console.log(`\nOkay, you responded ${firstAns}\n`);
    readline.question('Would you like some biscuits?\n', secondAns => {
      console.log(`\nSo you said ${firstAns} to tea and ${secondAns} to biscuits.\n`);
      readline.close();
    });
  });
};

teaAndBiscuits();