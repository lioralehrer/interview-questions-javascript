// write a function that will get 2 numbers for an array that will grow x times
//  by joinning 2 last numbers

function calc (a,b ,times){
    let first = a;
    let second = b; 
    let arr = [first,second]
    for (let i = 2 ; i < times ; i++){
        arr[i]= first + second;
        first = arr[i-1]
        second = arr[i]
    }
    console.log(arr);
    return arr
}
calc( 1, 1, 100)