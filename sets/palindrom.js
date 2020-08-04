//  PALINDROM
// A function that check if an input is a palindrom. 
function isPalindrom02 (something) {
    let arr = something.toString().split('');
    for (let i = 0, j = arr.length - 1; i < arr.length / 2; i++, j--){
        if (arr[i] !== arr[j]){
            return false
        }
    }
    return true
}
console.log(isPalindrom02("abcdedcba"));
console.log(isPalindrom02("abcdedcbaaaa"));
console.log(isPalindrom02(2345432));