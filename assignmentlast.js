// 1. Write an Algorithm that takes a number and returns the square of all digits in the number. E.g given 9119. The algorithm should return 811181

function squareOfDigits(number) {
    let digits = number.toString().split("").map(d => parseInt(d));
    let squares = digits.map(d => d * d);
    let result = parseInt(squares.join(""));
    return result;
}
console.log(squareOfDigits(9119))


// // 2. Find the highest number between an array of numbers.  Given [2, 5, 8, 1, 6, 9, 5] Return 9 which is the highest number.

const num=[2, 5, 8, 1, 6, 9, 5]

let maximum=()=>{
    return Math.max(...num)

}
console.log(maximum())



// 3. Given an array and a number(k), find two numbers within the array that when added, it will given you k. E.g ([3,2,4],6). Return 2 and 4
const findSum = (arr, k) => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === k) {
          return [arr[i], arr[j]];
        }
      }
    }
    return null;
  };
  console.log(findSum([3, 2, 4], 6));
  

