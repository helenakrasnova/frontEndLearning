//task1
// function ucFirst(str) {
//     let newStr = '';
//     for (let i = 0; i < str.length; i++) {
//         if (i === 0) {
//             newStr += str[i].toUpperCase();
//         }
//         else {
//             newStr += str[i];
//         }
//     }
//     return newStr;
// }
// console.log(ucFirst("вася"));

//task2
// function truncate(str, maxlength) {
//     let newStr = '';
//     if (str.length > maxlength) {
//         for (let i = 0; i < maxlength-1; i++) {
//             newStr += str[i];
//         }
//         newStr += '...';
//         return newStr;
//     }
//     else{
//         return str;
//     }
// }
// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
// console.log(truncate("Всем привет!", 20));

//task3
// function extractCurrencyValue(str) {
//     let newStr = '';
//     for (let i = 0; i < str.length; i++) {
//         if (isNaN(+str[i]) === false) {
//             newStr += str[i];
//         }
//     }
//     return parseInt(newStr);
// }
// console.log(extractCurrencyValue('$120'));