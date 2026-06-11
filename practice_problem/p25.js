//Find the factorial of a number
function factorial(number){
  
  let fact = 1;
  for (let i =1; i <= number;i++){
    console.log(i,number)
    fact = fact * i
  }
  return fact
}

console.log(factorial(5))