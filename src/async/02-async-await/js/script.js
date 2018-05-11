(function() {

  function step1() {

    return new Promise(function(resolve, reject) {

      setTimeout(function() {
        console.log('Step 1');
        resolve([200]);

      }, 500);

    });

  }

  function step2(data) {
    return new Promise(function(resolve, reject) {

      setTimeout(function() {
        console.log('Step 2', data);
        resolve([...data, 500]);
      }, 500);
    });
  }

  function step3(finalData) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        console.log('Step 3', finalData);
        resolve();
      }, 100);
    });
  }

  async function runEverything() {

    var responseOne = await step1();
    var responseTwo = await step2(responseOne);
    var responseThree = await step3(responseTwo);
  }

  runEverything();

})();
