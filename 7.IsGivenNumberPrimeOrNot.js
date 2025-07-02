// find the given number is prime  or not 
// solution and logic 
//  what is prime number a number divisble by 1 and itself . 
// if any number divisble by more than 2 times then it is not prime number 
//  for that exclude the 1 so start check from 2 and execlude the the number itself . so n-1 
// if any number divisble by any number between 2 to n-1  then it is not prime

function isPrime(n){ 
    for(let i=2; i<=(n-1); i++){ 
      
        if(n%i ==0){
            return "Given number is not prime"
        }
    } 
    return "Given number is prime"
    
} 
let result = isPrime(12)
console.log(result)