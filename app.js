const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
  ];
  


// Function to check if a number is prime
function isPrime (num){
    if (num<=1) return false;
    for (let i = 2; i<=Math.sqrt(num); i++){
        if (num%i==0) return false;
    }
    return true;
}

// Function to find prime numbers in an Array
function findPrimes(arr){
    let primeArr = [];
    for (let i=0; i<arr.length;i++){
        if (isPrime(arr[i])){
            primeArr.push(arr[i]);
        }
    }
    return primeArr;
}

//Find prime numbers in the given Array and store the in primeArray
let primeArray = findPrimes(numbers);
console.log("So prime numbers from the given array are: " + primeArray);

//Find the maximum number in the primeArray
let maxPrime = Math.max(...primeArray);
console.log("The Maximum number in primeArray: " + maxPrime);

// Find the minimum number in primeArray
let minPrime = Math.min(...primeArray);
console.log("The Minimum number in primeArray: " + minPrime);

//Calculating the sum of all numbers in primeArray
let sumPrime = primeArray.reduce((acc,num) => acc+num, 0);
console.log("The sum of the numbers in primeArray: " + sumPrime);