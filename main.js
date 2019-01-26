// Задание 1

// function printWindowValues() {
//     for (keys in window) {
//         console.log(keys);
//     }
// }
// console.log(printWindowValues());


// Задание 2

// function expTen(x) {
//     var result = x;
//     for (i = 9; i > 0; i = i - 1) {
//         result = result * x;
//     }
//     return result;
// }
// console.log(expTen(2));


// Задание 3

function getFuncRes(method,text) {
    var method, text;
    return method(text)
}

getFuncRes(console.log,"Hello World!")
