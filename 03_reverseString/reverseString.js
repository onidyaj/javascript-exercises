function reverseString(word) {
/*let reverseWord = '';
if (word.length < 0){
    return 'ERROR'
} else{
    for (let i = word.length-1; i >= 0; i--){
        reverseWord += word[i];
    }
return reverseWord;
}
Below is a second way I tried to do it using array methods*/

let stringSplit = word.split("");

let stringReverse = stringSplit.reverse();

let stringJoin = stringReverse.join("");

return stringJoin;


}

// Do not edit below this line
module.exports = reverseString;
