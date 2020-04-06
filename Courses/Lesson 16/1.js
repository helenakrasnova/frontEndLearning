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
