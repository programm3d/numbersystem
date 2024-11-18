const numbers = [
    3, 7, 2, 15, 9, 20, 5, 14, 12, 1, 8, 11, 6, 19, 4, 10, 17, 13, 16, 18,
  ];

  //Functions to check numbers in an array is even or odd

function checkEvenOdd(arr){
    for(let i =0; i<arr.length;i++){
        if (arr[i] % 2 == 0){
            console.log(arr[i] + " is Even");
        }else{
            console.log(arr[i]+" is odd");
        }
    }
}

checkEvenOdd(numbers);
