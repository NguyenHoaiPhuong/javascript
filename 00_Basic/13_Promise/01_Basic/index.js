function getSum(n1, n2) {
  const isAnyNegative = function() {
    return n1 < 0 || n2 < 0;
  }

  var promise = new Promise((resolve, reject) => {    
    setTimeout(function() {      
      resolve(n1 + n2);
    }, 2000)

    if (isAnyNegative()) {
      reject(Error("Negatives not supported"));
    }
  })

  return promise;
}

getSum(10, -5)
.then(function(result) {
  alert(result);
  return getSum(10, 20) // this returns another promise  
}, alert)
.then(alert, alert)
// .then(alert, null)
.catch(alert)
.finally(function() {
  alert("promise is ready")
})

console.log("End of script ");