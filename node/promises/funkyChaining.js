var Q = require('q');

randomAsync()
  .then(randomAsync)
  .then(randomAsync)
  .then(randomAsync)
  .catch(restart)
  .then(randomAsync)
  .then(randomAsync)
  .finally(universal)
  .then(randomAsync)
  .catch(restart)
  .finally(universal)
  .then(randomAsync)
  .then(randomAsync)
  .then(randomAsync)
  .catch(restart)
  .finally(function () {
    console.log('done');
  });


function randomAsync(arg) {
  var deferred = Q.defer();

  if (coinFlip()) {
    console.log('resolved');
    deferred.resolve();
  } else {
    console.log('rejected');
    deferred.reject();
  }

  return deferred.promise;
}


function coinFlip() {
  return Math.floor(2*Math.random());
}

function restart() {
  console.log('restarting');
  return Q('restarting');
}

function universal() {
  console.log('I like cheetos');
  return Q();
}
