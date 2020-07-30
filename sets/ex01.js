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
//   calc( 1, 1, 10)

// Here is the solution by recursion: 

function calcWithRecursion (a, b, times){
    if (times > 0){        
        console.log(a);
        calcWithRecursion(b,a+b, times-1);
    }    
}

 calcWithRecursion(1, 1, 10);

//  Fibonacci Sequence
// 0,1,1,2,3,5 ,8,13...

function fibonacci (times) {
    if (times === 2){
        return [0, 1] 
    }
    else{
        let fibo = fibonacci(times - 1);
        fibo.push(fibo[fibo.length-2]+ fibo[fibo.length-1]);
        return fibo
    }
}
console.log("Fibonacci Sequence")
console.log(fibonacci(10));