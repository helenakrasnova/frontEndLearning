// let browser = prompt();
// if (browser === 'Edge') {
//     alert("You've got the Edge!");
// }
// else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
//     alert('Okay we support these browsers too');
// }
// else {
//     alert('We hope that this page looks ok!');
// }


// const number = +prompt('Введите число между 0 и 3', '');
// switch (number) {
//     case 0: alert('Вы ввели число 0');
//     break;
//     case 1: alert('Вы ввели число 1');
//     break;
//     case 2:
//     case 3: alert('Вы ввели число 2, а может и 3');
// }


// function checkAge(age) {
//     return (age > 18) ? true : confirm;
// }
// function min(a, b) {
//     if (a > b) {
//         return b;
//     }
//     else if (a < b) {
//         return a;
//     }
// }
// function min(a, b) {
//     return (a < b) ? a : b;
// }

// let y = +prompt();
// function getSquareOfNumber(x) {
//     return x * x;
// }
// getSquareOfNumber(y);


// let y = +prompt();
// function getSumOfNumbers(x,z) {
//     return x + z;
// }
// getSumOfNumbers(y);

// throw new Error();
// let a=12;
// let b=10;
// let c=5;
// function getExpression(x,y,z){
// return (x-y)/z;
// }
// getExpression(a,b,c);
// let num = +prompt("Введите число от 1 до 7");
// function getDayOfTheWeek(x) {
//     switch (x) {
//         case 1:
//             alert("Понедельник");
//             break;
//         case 2:
//             alert("Вторник");
//             break;
//         case 3:
//             alert("Среда");
//             break;
//         case 4:
//             alert("Четверг");
//             break;
//         case 5:
//             alert("Пятница");
//             break;
//         case 6:
//             alert("Суббота");
//             break;
//         case 7:
//             alert("Воскресенье");
//             break;
//         default:
//             throw new Error("Неправильно");
//     }
// }
// getDayOfTheWeek(num);


function pow(x, n) {
    let initialValue = x;
    for (let i = 1; i < n; i++) {
        x *= initialValue;
    }
    return x;
}
let result = pow(3, 5);
alert(result);