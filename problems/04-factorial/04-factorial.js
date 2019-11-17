/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(sumNum) {
    if (someNum < 0) return 
    if (someNum === 0) return 1 
    return (someNum * factorial(someNum - 1)) 
  }
  someNum = 5
  console.log (factorial(someNum))