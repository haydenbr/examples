var Q = require('q');

/*
Shows how then(), catch(), and finally() can be used together.

All three functions return a promise that is resolved with the value returned from
their callback functions. then() fires if the promise it is called on resolves,
otherwise, then() is skipped. catch() fires if the promise it is called on rejects.
finally() will always execute, regardless of whether or not the promise it is called
on resolves or rejects.
*/

randomAsync()           // if any of these promises are rejected, the rest of then() blocks will be skipped
  .then(randomAsync)
  .then(randomAsync)
  .then(randomAsync)
  .catch(restart)       // will only be called if one of the above promises rejects
  .then(randomAsync)
  .then(randomAsync)
  .finally(universal)   // will always be called, regardles of what happens above
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

function randomAsync() {
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

function normalUseCase() { // similar to try - catch - finally
  randomAsync()
    .then(randomAsync)
    .then(randomAsync)
    .then(randomAsync)
    .catch(function () {
      console.log('rejected');
    })
    .finally(universal);
}
