//Challenge 1
var testArr = [6,3,5,1,2,4];
var sum = 0;
for(i=0;i<testArr.length;i++){
    sum = sum + testArr[i]
    console.log('Num: '+ testArr[i] + ', Sum: '+ sum)
}

//Challenge 2
var testArr = [6,3,5,1,2,4];
for(i=0;i<testArr.length;i++){
    testArr[i] = testArr[i] * i;
}
console.log(testArr)

// [Running] node "c:\Users\andedre\Documents\Scripts\CodingDojo\Public\AlgorithmPracticeArrays\tempCodeRunnerFile.js"
// Num: 6, Sum: 6
// Num: 3, Sum: 9
// Num: 5, Sum: 14
// Num: 1, Sum: 15
// Num: 2, Sum: 17
// Num: 4, Sum: 21
// [ 0, 3, 10, 3, 8, 20 ]