const prompt = require('readline-sync')
const {matrixProduct, sumOfMat, sumOfArray, sumOfEachRow, trim, countWords} = require('./utils.js');

let a = [
    [15, 25, 35],
    [6, 24, 68],
    [45, 56,7]
];

let b = [
    [1,2,3],
    [5,6,7],
    [9,14,92]
];

let sentence = prompt.question('Write a sentence ');
let word = prompt.question('Write a word');

console.log(sumOfEachRow(a));
console.log(sumOfMat(a, b));
console.log(matrixProduct(a, b));
console.log(countWords(sentence));
console.log(trim(word));