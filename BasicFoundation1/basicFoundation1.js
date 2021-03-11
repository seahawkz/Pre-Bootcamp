//1. Get 1 to 255
function createArr() {
    var arr = [];
    for (i = 1; i <= 255; i++) {
        arr.push(i);
    }
    console.log(arr);
}
createArr();

//2. Get even 1000
function getEven() {
    var sum = 0;
    for (i = 1; i <= 1000; i++) {
        if (i % 2 == 0) {
            sum += i;
        }
    }
    console.log(sum);
}
getEven();

//3. Sum odd 5000
function getOdd() {
    var sum = 0;
    for (i = 1; i <= 5000; i++) {
        if (i % 2 == 1) {
            sum += i;
        }
    }
    console.log(sum);
}
getOdd();

//4.  Iterate an array
function iterate() {
    var arr1 = [2, 5, -8, 13, -2];
    var sum = 0;
    for (i = 0; i < arr1.length; i++) {
        sum += i;
    }
    console.log(sum);
}
iterate();

//5.  Find Max of array
function arrayMax() {
    var arr = [1, 4, -8, 13, 7];
    var max = arr[0];
    for (i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log(max);
}
arrayMax();

//6.  Find Average
function arrayAve() {
    var arr = [1, 3, 5, 7, 20];
    var sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    var ave = sum / arr.length;
    console.log(ave);
}
arrayAve();

//7.  Array odd  return array of all odd between 1-50
function arrayOdd() {
    var OddArr = [];
    for (i = 1; i <= 50; i++) {
        if (i % 2 == 1) {
            OddArr.push(i);
        }
    }
    console.log(OddArr);
}
arrayOdd();

//8.  Greater than Y
function greaterY() {
    var y = 3;
    var count = 0;
    var arr = [1, 3, 5, 7];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            count++;
        }
    }
    console.log(count);
}
greaterY();

//9.  Squares
function squares() {
    var arr = [1, 5, 10, -2];
    for (i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
    }
    console.log(arr);
}
squares();

//10.  Negatives Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
function rmNegatives() {
    var arr = [1, 5, 10, -2];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    console.log(arr);
}
rmNegatives();

//11.  Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])
function minMaxAvg() {
    var arr = [1, 5, 10, -2];
    var newarr = [];
    var min = arr[0];
    var max = arr[0];
    var sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    var ave = sum / arr.length;
    newarr.push(max, min, ave);
    console.log(newarr);
}
minMaxAvg();

//12.  Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
function swapValues() {
    var arr = [1, 5, 10, -2];
    var pos1 = arr[0];
    var last = arr[arr.length - 1];
    if (arr.length >= 2) {
        arr[0] = last;
        arr[arr.length - 1] = pos1;
    }
    console.log(arr);
}
swapValues();

//13.  Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
function num2string() {
    var arr = [-1, -3, 2];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = "Dojo";
        }
    }
    console.log(arr);
}
num2string();
