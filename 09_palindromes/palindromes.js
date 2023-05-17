//convert string to an array, iterate through and remove non-letters/non-numbers, compare what's left, determine with a boolean
/*
const palindromes = function (word) {
    let newStr = word.toLowerCase().replace(/[^a-z]/g,""); //turns the word to lowercase, replaces what's not a letter into a blank char
    console.table(`The final new string is ${newStr}`);
    let newArr = newStr.split("");
    newArr.reverse();
    let processedStr = newArr.join("");
    if (processedStr == newStr){
        return true;
    } else {
        return false;
    }
};
*/

const palindromes = function (word) {
    const processedStr = word.toLowerCase().replace(/[^a-z]/g,''); //turns word to lc and replaces any characters not in the range of a-z to blank
    return processedStr.split('').reverse().join('') == processedStr; //returns boolean after turning to array, reversing array order, then rejoining it
};

// Do not edit below this line
module.exports = palindromes;
