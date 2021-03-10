//1. Get 1 to 255
function createArr(){
    var arr = [];
    for(i=1;i<=255;i++){
        arr.push(i);
    }
    console.log(arr);
}
createArr()


//2. Get even 1000
function getEven(){
    var sum = 0;
    for(i=1;i<=1000;i++){
        if(i % 2 == 0){
            sum += i;
        }  
    }
    console.log(sum);
}
getEven()

//3. Sum odd 5000
function getOdd(){
    var sum = 0;
    for(i=1;i<=5000;i++){
        if(i % 2 == 1){
            sum += i;
        }  
    }
    console.log(sum);
}
getOdd()

//4.  Iterate an array
function iterate(){
    var arr1 = [2,5,-8,13,-2]
    var sum = 0
    for(i=0;i<arr1.length;i++){
        sum += i
    }
    console.log(sum);
}
iterate()

//5.  Find Max of array
function arrayMax(){
    var arr = [1,4,-8,13,7];
    var max = arr[0];
    for(i=1;i<arr.length;i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    console.log(max)
}
arrayMax()
