//1. Get 1 to 255
function createArr(){
    var arr = [];
    for(i=1;i<=255;i++){
        arr.push(i);
    }
    return(arr);
}
x = createArr()
console.log(x)

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
