// function inchesToFeet(inches) {
//   let feet = inches / 12;
//   return feet;
// }
// var returnFeet = inchesToFeet(120);
// console.log("feet:", returnFeet);

// function meterToCentimeter(meter) {
//   var centimeter = meter * 100;
//   return centimeter;
// }
// var returnCentimeter = meterToCentimeter(100);
// console.log(returnCentimeter);

// even and odd problem solution

// function even_odd(number) {
//   if (number % 2 == 0) {
//     return "true";
//   } else {
//     return "false";
//   }
// }
// var returaAns = even_odd(21);
// console.log(returaAns);

// ====================
// function isLeapYear(year) {
//   if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
//     return "This year is LeapYear";
//   } else {
//     return "This year is not LeapYear";
//   }
// }

// var leapYearAns = isLeapYear(1990);
// console.log(leapYearAns);

// sum array element

// let the_array = [5, 7, 8, 10, 45, 30];
// function findOddSum(perameter_array) {
//   var loopSum = 0;
//   for (let i = 0; i < perameter_array.length; i++) {
//     let elements = the_array[i];
//     loopSum += elements;
//   }
//   return loopSum;
// }

// var loopSumAns = findOddSum(the_array);
// console.log(loopSumAns);

// all odd numbers push a new anarray

// var number = [5, 7, 8, 10, 45, 30];
// function getOddNumberOfAnArray(pera_number) {
//   var new_array = [];
//   for (var i = 0; i < pera_number.length; i++) {
//     var innerNumber = number[i];
//     if (innerNumber % 2 !== 0) {
//       new_array.push(innerNumber);
//     }
//   }
//   return new_array;
// }
// var returnNewArray = getOddNumberOfAnArray(number);

// console.log(returnNewArray);

// ========== again

// var again_number = [13, 25, 22, 36, 45];

// function getOddNumberOfAnArray_2(all_number) {
//   var onlyOddNumber = [];
//   var oddSum = 0;
//   for (var i = 0; i < all_number.length; i++) {
//     var element_2 = again_number[i];
//     if (element_2 % 2 !== 0) {
//       onlyOddNumber.push(element_2);
//       oddSum += element_2;
//     }
//   }
//   console.log(oddSum);
//   return onlyOddNumber;
// }
// var oddAns = getOddNumberOfAnArray_2(again_number);
// console.log(oddAns);

// multiplication

// function multiplicationOfNumbers(number) {
//   var multiplication = 1;
//   for (i = 1; i <= number; i++) {
//     multiplication *= i;
//   }
//   return multiplication;
// }

// let multiplicationAns = multiplicationOfNumbers(12);
// console.log(multiplicationAns);

// reverse multiply

// function reverseMultiply(number) {
//   let reverse = 1;
//   for (i = number; i >= 1; i--) {
//     reverse *= i;
//   }
//   return reverse;
// }
// let reverse_ans = reverseMultiply(7);
// console.log(reverse_ans);

// ============hourToMinutes

function hourToMinutes(hours) {
  var minutes = hours * 60;
  return minutes;
}
var returnMinutes = hourToMinutes(2);
console.log("minutes:", returnMinutes);

// =============findLeapYear

var year_array = [2023, 2024, 2025, 2028, 2030];

function findLeapYear(year_name) {
  let leapyear = [];
  for (i = 0; i < year_name.length; i++) {
    var year_element = year_array[i];
    if (
      (year_element % 4 == 0 && year_element % 100 !== 0) ||
      year_element % 400 == 0
    ) {
      leapyear.push(year_element);
    }
  }
  return leapyear;
}
let leapyearAns = findLeapYear(year_array);
console.log(leapyearAns);
