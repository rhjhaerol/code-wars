// case: https://www.codewars.com/kata/5b077ebdaf15be5c7f000077
// Day: 1

let countSheep = function (num) {
    let sheep = "";
    for (let i = 1; i <= num; i++) {
        sheep += i + " sheep...";
    }
    return sheep;
};

console.log(countSheep(0));
console.log(countSheep(3));
