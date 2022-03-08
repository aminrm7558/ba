// 1. Write a JS code to print numbers from 1 to 10
// function printNumber() {
//   var result = [];
//   for (var i = 1; i <= 10; i++) {
//     result.push(i);
//   }
//   return result;
// }
// console.log(printNumber());

// // 2. Write a JS code to print a 2D array
// function array2D(x, name) {
//   var arr = Array(x),
//     h = 0;
//   for (var i = 0; i <= x; i++) {
//     arr[i] = [];
//   }
//   for (var i = 0; i <= x; i++) {
//     for (var j = 0; j < x; j++) {
//       arr[i][j] = name[h++];
//     }
//   }
//   return arr;
// }

// 3. Write a JS code to print Even numbers in given array
// function getArray(a , b){
//     var result =[];
//     for(var i = a; i <= b; i++){
//         if (i % 2 == 0){
//             result.push(i);
//         }
//     }
//     return result
// }
// console.log(getArray( 2 , 20));

// 6. Write a JS code to find the power of a number using for loop
// function numPower(num , power ){
//     var result =1;
//     for(var i = 1; i <= power; i++){
//         result*=num;
//     }
//     return result;
// }
// console.log(numPower(2, 5));

// 7. Write a JS code to print a pattern using for loop
// function printPattern(pattern){
//     for(var i = 1; i <= pattern ; i++){
//         var str = '';
//         for(var j = 1; j <= i; j++){
//              str+= j + ' ';
//         }
//         console.log(str);
//     }
// }
// printPattern(5);

// 8. Write a JS code to find the no of digits in a number
// function digitCount(number) {
//     var res = [];
//     for(var i =0; i<number.length; i++) {
//         res[i]= number[i];
//     }
//     return res;
// }
// console.log(digitCount('1324'));//////////////////////////////////
// Sum numbers of numbers
// function sumNumber(number) {
//     var sum = 0;
//     while(number!=0){
//         sum += number%10;
//         number = Math.floor(number/10);
//     }
//     return sum;
// }
// console.log(sumNumber(123))

////////////////////////////////////////////////////////////////

// Fibonacci Series
// var Fibonacci = (n) => {
//   var result = [0, 1];
//   for (var i = 2; i <= n; i++) {
//     result[i] = result[i - 2] + result[i - 1];
//   }
//   return result;
// };
// console.log(Fibonacci(8));
// Sum of Elements of a Fibonacci Series
// function Sum(x) {
//     var sum = 0;
//   var ar = Fibonacci(x);
//     for(var i =0; i <ar.length; i++) {
//       sum += ar[i];
//     }
//     return sum;
// }
// console.log(Fibonacci(20));
// console.log(Sum(20));
// Exercise 1;
// function outside(x) {
//   function inside(y) {
//     return x + y;
//   }
//   return inside;
// }
// console.log(outside(3)(5))
/////////////////////////////////////
// Exercise 2;
// function arrMan(arr) {
//    var arrNew = [];
//     for(var i = 0; i < arr.length; i++){
//         arrNew.push(arr[i]*2);
//     }
//     return arrNew;
// }
// console.log(arrMan([1 , 5 , 10 , 15 , 20 , 30 , 40 , 50]))

// //////////////////////////////////

// function getTwoNumbers(x , y) {
//     if(x>y)
//     return x;
//     else if(x<y)
//     return y;
//     else return x || y;
// }
// console.log(getTwoNumbers(5 , 8));

/////////////////////////////////////

// function getSampleNumbersInArray(arr) {
//   var arr = Array(3);
//   for (var i = 0; i < arr.length; i++) {

//   }
// }
// console.log(getSampleNumbersInArray([1,2,3]));


// calculate Sum of Triangles
// var calcSumOfTriangles = (x, y, z) => {
//   if ((x + y > z) && (y + z > x) && (x + z > y)) {
//     var p = (x + y + z) / 2;
//     var s = Math.sqrt(p * (p - x) * (p - y) * (p - z));
//     return s;
//   } else {
//     return "!!!!!!!!با این اضلاع نمیتوان مثلثی ساخت عزیزم";
//   }
// };
// console.log(calcSumOfTriangles(2,8,9 ));

  // var calcSth = (Str)=>{
  //     var calc = Str.pop();
  //     for(var i =0; i<Str.length; i++){
  //       Str[i] += calc;
  //     }
  //     return arr;
  // }
  // console.log(calcSth('W3res'));
  const calcSthInArr = (myArray) => {
      var arr = [];
      for(var i = 0; i<myArray.length; i++){
        arr[i] = myArray[i] * 2;
      }
      return arr;
  }
  console.log(calcSthInArr([10 , 2 ,3]));
  