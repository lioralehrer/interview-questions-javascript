// FIBONACCI SEQUENCE

// write a function that will get 2 numbers for an array that will grow x times
//  by joinning 2 last numbers

function calc(a, b, times) {
    let first = a;
    let second = b;
    let arr = [first, second]
    for (let i = 2; i < times; i++) {
        arr[i] = first + second;
        first = arr[i - 1]
        second = arr[i]
    }
    console.log(arr)
    return arr
}
calc(1, 1, 10)

// Write a function that get a number and check if it's inside fibonacci sequence:

function isFobo (num) {
    let first = 1;
    let second = 1
    let temp;
    while (num > second) {
        temp = first
        first = second;
        second = temp + first;
    }
    if (num === second) {
        return true;
    } else {
        return false
    }
}
console.log(isFobo(12));
console.log(isFobo(5));

// Here is the solution by recursion: 

function calcWithRecursion(a, b, times) {
    if (times > 0) {
        console.log(a);
        calcWithRecursion(b, a + b, times - 1);
    }
}

calcWithRecursion(1, 1, 10);

//  Fibonacci Sequence
// 0,1,1,2,3,5 ,8,13...

function fibonacci(times) {
    if (times === 2) {
        return [0, 1]
    }
    else {
        let fibo = fibonacci(times - 1);
        fibo.push(fibo[fibo.length - 2] + fibo[fibo.length - 1]);
        document.getElementById("fibo").innerHTML = fibo
        return fibo
    }
}

