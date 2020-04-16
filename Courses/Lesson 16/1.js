// let newArrayLength = parseInt(prompt(''));
// function getNewArray(arrayLength) {
//     let arr = [];
//     for (let i = 0; i < arrayLength; i++) {
//         let enteredValue = prompt('');
//         let parsedValue = parseInt(enteredValue);
//         if (isNaN(parsedValue)) {
//             arr.push(enteredValue);
//         }
//         else {
//             enteredValue = parseInt(enteredValue);
//             arr.push(enteredValue);
//         }
//     }
//     return arr;
// }
// console.log(getNewArray(newArrayLength));
// let userStr = prompt('');
// console.log(userStr);
// let arr = userStr.split('');
// let str = arr.join('');
// console.log(arr);
// console.log(str);
// let obj = {
//     name: "Alex",
//     surname: "Pupkin",
// }
// function changeStringCase(enteredName) {
//     let str = '';
//     for (let i = 0; i < enteredName.length; i++) {
//         if (i === 0) {
//             str += enteredName[i].toLowerCase();
//         }
//         else {
//             str += enteredName[i].toUpperCase();
//         }
//     }
//     return str;
// }
// console.log(changeStringCase(obj.name), changeStringCase(obj.surname));



// function changeLetters(obj) {
//     for (let key in obj) {
//         let arr = obj[key].split('');
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] === arr[i].toUpperCase()) {
//                 arr[i] = arr[i].toLowerCase();
//             }
//             else {
//                 arr[i] = arr[i].toUpperCase();
//             }
//         }
//         obj[key] = arr.join('');
//     }
//     return obj;
// }

// console.log(changeLetters(obj));

//task1
// let arr = [];
// let arrayLength = +prompt('');
// const a = 1;
// const b = 0;
// for (let i = 0; i < arrayLength; i++) {
//     if (i === 0 || i === arrayLength - 1) {
//         arr.push(a);
//     }
//     else {
//         arr.push(b);
//     }
// }
// console.log(arr);

//task2
// let arr = [];
// let arrayLength = +prompt('');
// const a = 1;
// const b = 0;
// for (let i = 0; i < arrayLength; i++) {
//     if (i === 0 || i % 2===0) {
//         arr.push(b);
//     }
//     else {
//         arr.push(a);
//     }
// }
// console.log(arr);

//task3
// let arr = [];
// let arrayLength = +prompt('');
// let a = 1;
// for (let i = 0; i < arrayLength; i++) {
//     arr.push(a);
//     a += 2;
// }
// console.log(arr);

//task4
// let arr = [];
// let arrayLength = +prompt('');
// let x = +prompt('первый элемент');
// let d = +prompt('разность');
// for (let i = 0; i < arrayLength; i++) {
//     arr.push(x);
//     x+=d;
// }
// console.log(arr);

//task5
// let arr = [];
// let arrayLength = +prompt('');
// let a = 0;
// for (let i = 0; i < arrayLength; i++) {
//     arr.push(a);
//     a += 2;
// }
// console.log(arr);

//task6
// let arr = [];
// let firstNumber = +prompt('введите первое значение');
// do {
//     if (firstNumber % 3 === 0) {
//         arr.push(firstNumber);
//         firstNumber -= 1;
//     }
//     else { 
//         firstNumber -= 1; 
//     }
// } while (firstNumber!=0);
// console.log(arr);

//task7
// let arr = [];
// let n = +prompt('введите число значений');
// let prev = 0;
// let next = 1;
// for (let i = 0; i < n; i++) {
//     arr.push(prev);
//     let temp = next;
//     next = prev + next;
//     prev = temp;

// }
// console.log(arr);

//task8
// let arr = [];
// let arrayLength = +prompt('введите длину массива');
// for (let i = 0; i < arrayLength; i++) {
//     for (let j = 2; j <= i; j++) {
//         if (i % j === 0) {
//             arr.push(j);
//         }
//     }
// }
// console.log(arr);


//task9
// let arr = [];
// let arrayLength = +prompt('введите длину массива');
// for (let i = 0; i < arrayLength; i++) {
//     arr.push(i * i);

// }
// console.log(arr);

//task10
// let arr = [];
// let arrayLength = +prompt('введите длину массива');
// let a = 0;
// for (let i = 0; i < arrayLength; i++) {
//     if (i % 2 === 0 || i === 0) {
//         arr.push(1);
//     }
//     else {
//         a = i % 5;
//         arr.push(a);
//     }

// }
// console.log(arr);

//task12
// let arr = [];
// let arrayLength = +prompt('введите длину массива');
// let middle = Math.round(arrayLength / 2);
// for (let i = 0; i < middle; i++) {
//     arr.push(i);
// }
// for (let j = middle - 1; j >= 0; j--) {
//     if (arrayLength % 2===0) {
//         arr.push(j);
//     }
//     else {
//         if (j != middle - 1){
//             arr.push(j);
//         }
//     }
// }
// console.log(arr);

//task11
// let arr = [];
// let arrayLength = +prompt('введите длину массива');
// for (let i = 0; i < arrayLength / 3; i++) {
//         for (let j = 0; j < 3; j++) {
//             arr.push(i);
//         }
// }
// console.log(arr);

//task13
// let arr = [];
// let arrayLength = +prompt('введите длину массива');
// let counter =0;
// do{ 
//     let returningNumber = Math.round(Math.random() * 100000).toString();
//     let countOfOneDigit = 0;
//     for (let j = 0; j < returningNumber.length; j++) {
//         if (returningNumber[j] === '1') {
//             countOfOneDigit++;
//         }
//     }
//     if (countOfOneDigit === 2){
//         arr.push(+returningNumber);
//     }
//     counter++;
// }
// while(arr.length!=arrayLength);
// console.log(arr);
// console.log(counter);

//task14
// let arr = [];
// let arrayLength = +prompt('введите длину массива');
// let counter = 0;
// let countOfOneNumber = 0;
// let countOfZeroNumber = 0;
// do {
//     let returningNumber = Math.round(Math.random());
//     if (returningNumber === 0) {
//         if (countOfOneNumber > countOfZeroNumber) {
//             arr.push(returningNumber);
//             countOfZeroNumber++;
//         }
//     }
//     else {
//         arr.push(returningNumber);
//         countOfOneNumber++;
//     }
//     counter++;
// }
// while (arr.length != arrayLength);
// console.log(arr);
// console.log(counter);

//task15
// let arr = [];
// let counter1 = 0;
// let counter2 = 0;
// let counter3 = 0;
// do {
//     let number = Math.round(Math.random() * 10);
//     if (number === 1) {
//         if (counter1 < 5) {
//             arr.push(number);
//             counter1++;
//         }
//     }
//     else if (number === 2) {
//         counter2++;
//         arr.push(number);
//     }
//     else if (number === 3) {
//         counter3++;
//         arr.push(number);
//     }
//     else {
//         arr.push(number);
//     }
// }
// while (counter2 <= counter3 || counter1 < 3);
// console.log(arr);

//task8
// let arr = [];
// let arrayLength = +prompt('введите длину массива');
// do {
//     let number = Math.round(Math.random() * 100);
//     let isPrime = true;
//     for (let i = 2; i < number; i++) {
//         if (number % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime && number > 1) {
//         arr.push(number);
//     }
// }
// while (arr.length != arrayLength);
// console.log(arr);