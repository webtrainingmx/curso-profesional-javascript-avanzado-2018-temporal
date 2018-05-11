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

  step1().then(function(response) {
    return step2(response);
  }).then(function(response) {
    return step3(response);
  }).catch(function(error) {
    console.error(error);
  });

})();
