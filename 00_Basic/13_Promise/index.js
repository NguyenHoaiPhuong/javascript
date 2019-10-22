function getSum(n1, n2) {
  const isAnyNegative = function() {
    return n1 < 0 || n2 < 0;
  }

  var promise = new Promise(function(resolve, reject) {
    if (isAnyNegative()) {
      reject(Error("Negatives not supported"));
    }
    resolve(n1 + n2);
  })

  return promise;
}

getSum(5, 6)
.then(function(result) {
  displayResult(result);
  return getSum(10, 20) // this returns another promise  
}, displayError)
.then(displayResult, displayError)

function displayResult(result) {
  console.log(result)
}

function displayError(error) {
  console.log(error)
}

console.log("End of script ");