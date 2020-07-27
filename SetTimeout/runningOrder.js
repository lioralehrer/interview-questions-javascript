//what will be the order of those outputs and why?  

console.log('Your');
let lehrer = setTimeout(function () {
    console.log('will');
}, 1);
let learns = setTimeout(function () {
    console.log('die');
}, 10);
let liora = setTimeout(function () {
    console.log('never');
}, 0);
console.log('Soul');


// Because 
// first, it will go over functions without setTimeout (setTimeout it’s like a new thread), 
// then, it is not such a big space between 1 to 0 milliseconds, so it is going by order of appearance
// The function with 10 milliseconds will come at last.
