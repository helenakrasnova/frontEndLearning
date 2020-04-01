//task1
// let arr = [2, 5, 9, 15, 0, 4];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 3 && arr[i] < 10) {
//         console.log(arr[i]);
//     }
// }
//task2
// let arr = [1, 5, 10, -10, -5, -1, 0, 6];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         sum += arr[i];
//     }
// }
// console.log(sum);
//task3
// let arr = [1, 2, 5, 9, 4, 13, 4, 10];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 4) {
//         alert('есть!');
//     }
// }
//task4
// let arr = [10, 20, 30, 50, 235, 3000];
// for (let i = 0; i < arr.length; i++) {
//     let num = arr[i].toString();
//     if (num[0] === '1' || num[0] === '2' || num[0] === '5') {
//         console.log(arr[i]);
//     }
// }
// task5
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let str = '-';
// for (let i = 0; i < arr.length; i++) {
//     str = str + arr[i].toString() + '-';
// }
// console.log(str);
// task8
// let n = 1000;
// let num = 0;
// do {
//     n = n / 2;
//     num++;
// }
// while (n > 50);
// console.log(n);
// console.log(num);
// task10
// let arr = ['a', 'b', 'c'];
// for (let i = 0; i < arr.length; i++) {
//     alert(arr[i]);
// }
// task9
// let arr = ['a', 'b', 'c'];
// alert(arr);
//task11
// let arr = ['a', 'b', 'c', 'd'];
// alert(arr[0]+'+'+arr[1] +','+ arr[2]+'+'+arr[3]);
//task12
// let arr = [2, 5, 3, 9];
// let result = arr[0]*arr[1]+arr[2]*arr[3];
// console.log(result);
// task13
// let day = +prompt('число от 1 до 31');
// if (0 < day && day <= 10) { alert('первая'); }
// else if (10 < day && day <= 21) { alert('вторая'); }
// else if (21 < day && day <= 31) { alert('третья'); }
// else (alert('число неверное'));
//task14
// let day = +prompt('число от 1 до 12');
// if (3 <= day && day <= 5) { alert('весна'); }
// else if (6 <= day && day <= 8) { alert('лето'); }
// else if (9 <= day && day <= 11) { alert('осень'); }
// else if (day === 1 || day === 2 || day === 12) { alert('зима'); }
// else (alert('такого месяца нет'));
// task15
// let str = "abcde";
// if (str[0] === "a") {
//     alert('yes');
// }
// else (alert('no'));
//task16
// let str = "12345";
// if (str[0] === "1"||str[0] === "2"||str[0] === "3") {
//     alert('yes');
// }
// else (alert('no'));
// task17
// let str = "897";
// let first = parseInt(str[0]);
// let second = parseInt(str[1]);
// let third = parseInt(str[2]);
// console.log(first + second + third);
//task18
// let str = "465456";
// if ((parseInt(str[0]) + parseInt(str[1]) + parseInt(str[2])) === (parseInt(str[3]) + parseInt(str[4]) + parseInt(str[5]))) {
//     console.log('да');
// }
// else (
//     console.log('no')
// )
//task19
// let firstNum = +prompt('f');
// let secondNum = +prompt('s');
// let thirdNum = +prompt('t');
// let arr = [];
// arr.push(firstNum);
// arr.push(secondNum);
// arr.push(thirdNum);
// let min = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if (min > arr[i]) { min = arr[i]; }
// }
// console.log(min);
// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if (max < arr[i]) { max = arr[i]; }
// }
// console.log(max);
//task20
// let firstNum = +prompt('f');
// let secondNum = +prompt('s');
// let thirdNum = +prompt('t');
// let fouthNum = +prompt('f');
// let arr = [];
// arr.push(firstNum);
// arr.push(secondNum);
// arr.push(thirdNum);
// arr.push(fouthNum);
// let min = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if (min > arr[i]) { min = arr[i]; }
// }
// console.log(min);
// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if (max < arr[i]) { max = arr[i]; }
// }
// console.log(max);
//task22
// let num = prompt('пятизначное');
// console.log(num);
// let arr = [];
// arr.push(num[0]);
// arr.push(num[1]);
// arr.push(num[2]);
// arr.push(num[3]);
// arr.push(num[4]);
// let b;
// let sum=0;
// for (let i = 0; i < arr.length; i++) {
//     b = parseInt(arr[i]);
//     sum += b;
// }
// console.log(sum);
//task21
// let num1 = prompt('1');
// let num2 = prompt('2');
// let arr1 = [];
// let arr2 = [];
// arr1.push(num1[0]);
// arr1.push(num1[1]);
// arr1.push(num1[2]);
// arr1.push(num1[3]);
// arr2.push(num2[0]);
// arr2.push(num2[1]);
// arr2.push(num2[2]);
// arr2.push(num2[3]);
// let a = parseInt(arr1[0]) + parseInt(arr2[0]);
// let b = parseInt(arr1[1]) + parseInt(arr2[1]);
// let c = parseInt(arr1[2]) + parseInt(arr2[2]);
// let d = parseInt(arr1[3]) + parseInt(arr2[3]);
// let e = a.toString() + b.toString() + c.toString() + d.toString();
// console.log(e);
// let j = '' + a + b + c + d;
// console.log(j);
// let h = `${a}${b}${c}${d}`;
// console.log(h);
//task23
// let first = prompt('1');
// let second = prompt('2');
// let arr1 = [];
// let arr2 = [];
// for (let i = 0; i < first.length; i++) {
//     arr1.push(parseInt(first[i]));
// }
// for (let i = 0; i < second.length; i++) {
//     arr2.push(parseInt(second[i]));
// }
// function findMaxNumber(a, b) {
//     if (a > b) {
//         return a;
//     }
//     else {
//         return b;
//     }
// }
// let c = findMaxNumber(arr1[0], arr2[0]);
// let d=findMaxNumber(arr1[1], arr2[1]);;
// let e=findMaxNumber(arr1[2], arr2[2]);;
// let f=findMaxNumber(arr1[3], arr2[3]);;
// console.log(`${c}${d}${e}${f}`);
//task24
// let number = prompt();
// let arr = [];
// for (let i = 0; i < number.length; i++) {
//     arr.push(parseInt(number[i]));
// }
// let a = arr[0] * arr[0];
// let b = arr[1] * arr[1];
// let c = arr[2] * arr[2];
// let d = arr[3] * arr[3];
// console.log(`${a}${b}${c}${d}`);
//task25a
// let arr = [];
// let a;
// do {
//     a = prompt('введите число');
//     let b = parseInt(a);
//     if (b && b > 0) {
//         arr.push(b);
//     }

// } while (a !== 'STOP' && a !== '0');
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0 && arr[i] % 4 === 0) {
//         console.log(arr[i])
//     }
// }
//task25b
// let arr = [];
// let a;
// let arr2 = [];
// let c = 0;
// do {
//     a = prompt('введите число');
//     let b = parseInt(a);
//     if (b && b > 0) {
//         arr.push(b);
//     }

// } while (a !== 'STOP' && a !== '0');
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         arr2.push(arr[i]);
//         c = c + arr[i];
//     }
// }
// console.log(arr2);
// console.log(c);
//task25c
// let arr = [];
// let a;
// let arr2 = [];
// do {
//     a = prompt('введите число');
//     let b = parseInt(a);
//     if (b && b !== 0) {
//         arr.push(b);
//     }

// } while (a !== 'STOP' && a !== '0');
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] <0) {
//         arr2.push(arr[i]);
//         console.log(arr[i]);
//     }
// }
// console.log(arr2);
//task26
// let number = prompt('');
// let arr = [];
// let sum = 0;
// let max = 0;
// for (let i = 0; i < number.length; i++) {
//     arr.push(parseInt(number[i]));
// }
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     if (max < arr[i]) {
//         max = arr[i];
//     }
// }
// console.log(sum);
// console.log(max);
//task27
// let number = prompt('');
// let str = '';
// for (let i = number.length-1; i >= 0; i--) {
//     str+=number[i];
// }
// console.log(str);
//task28   12345  52341
// let number = prompt('');
// let str = `${number[number.length - 1]}`;
// for (let i = 1; i < number.length - 1; i++) {
//     str += number[i];
// }
// str+=`${number[0]}`;
// console.log(str);
//task29
// let result = [];
// for (let i = 100; i <= 9999; i++) {
//     let sum = 0;
//     let str = i.toString();
//     for (let j = 0; j < str.length; j++) {
//         sum += parseInt(str[j]);
//     }
//     if (sum === 6) {
//         result.push(i);
//     }
// }
// console.log(result);
//task30
// let result = [];
// for (let i = 100; i <= 9999; i++) {
//     let sum = 0;
//     let str = i.toString();
//     sum = parseInt(str[0]) + parseInt(str[str.length - 1]);
//     if (sum === 6) {
//         result.push(i);
//     }
// }
// console.log(result);
//task31
// let number = prompt('число');
// let numeral = prompt('цифра');
// let str = '';
// for (let i = 0; i < number.length; i++) {
//     if (number[i] != numeral) {
//         str += number[i];
//     }
// }
// console.log(str);
//task32
// let number1 = prompt('число1');
// let number2 = prompt('число2');
// let str = '';
// for (let i = 0; i < number1.length; i++) {
//     for (let j = 0; j < number2.length; j++) {
//         if (number1[i] === number2[j]) {
//             str += number1[i];
//         }
//     }
// }
// console.log(str);
//task33
let number1 = prompt('число1');
let number2 = prompt('число2');
let duplicatedNumbers = '';
for (let i = 0; i < number1.length; i++) {
    for (let j = 0; j < number2.length; j++) {
        if (number1[i] === number2[j]) {
            duplicatedNumbers += number1[i];
        }
    }
}
function removeDuplicatedNumbers(stringToAnalyze, duplicatedNumbers) {
    let result = '';
    for (let i = 0; i < stringToAnalyze.length; i++) {
        let duplicateFound = false;
        for (let j = 0; j < duplicatedNumbers.length; j++) {
            if (stringToAnalyze[i] === duplicatedNumbers[j]) {
                duplicateFound = true;
            }
        }
        if (duplicateFound === false) {
            result += stringToAnalyze[i];
        }
    }
    return result;
}
let result1 = removeDuplicatedNumbers(number1, duplicatedNumbers);
let result2 = removeDuplicatedNumbers(number2, duplicatedNumbers);

console.log(result1, result2);
