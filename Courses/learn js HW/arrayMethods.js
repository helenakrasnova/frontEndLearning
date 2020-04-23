// let old = [1, 2, 3];
// let newArray = [];
// for (let i = 0; i < old.length; i++) {
//     newArray.push(old[i] * 2);
// };
// console.log(newArray);
// newArray = [];
// old.forEach(function (element) {
//     newArray.push(element * 2);
// });
// console.log(newArray);
// newArray = [];

// old.forEach(element => newArray.push(element * 2));
// console.log(newArray);
// newArray = [];

// let newArray2 = old.map(element => element * 2);
// console.log(newArray2);

// function camelize(str) {
//     if (!str) {
//         return str;
//     }
//     let arr = str.split('-');
//     let result = arr.map((word, index) => {
//         if (word) {
//             let firstSymbol = index === 0 ? word[0].toLowerCase() : word[0].toUpperCase();
//             return `${firstSymbol}${word.substring(1, word.length)}`;
//         }
//     });
//     return result.join('');
// }
// console.log(camelize("-webkit--transition-"));

// function filterRange(arr, a, b) {
//     let newArray = arr.filter(element => {
//         if (element >= a && element <= b) {
//             return true;
//         }
//         else {
//             return false;
//         }
//     });
//     return newArray;
// }
// let arr = [5, 3, 8, 1];
// console.log(filterRange(arr, 1, 4));
// console.log(arr);

// function filterRange(arr, a, b) {
//     let newArray = arr.filter(element => element >= a && element <= b );
//     return newArray;
// }
// let arr = [5, 3, 8, 1];
// console.log(filterRange(arr, 1, 4));
// console.log(arr);

// function filterRangeInPlace(arr, a, b) {
//     for (let i = 0; i < arr.length; i++){
//         if (a > arr[i] ||arr[i]>b){
//             arr.splice(i,1);
//         }
//     }
// }
// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr,1,4);
// console.log(arr);

// function filterRangeInPlace(arr, a, b) {
//     arr.forEach((element, index) => {
//         if (a > arr[index] || arr[index] > b) {
//             arr.splice(index, 1);
//         }
//     });
// }
// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4);
// console.log(arr);

// let arr = [5, 2, 1, -10, 8];
// arr.sort((a, b) => {
//     if (a > b) return -1;
//     if (a == b) return 0;
//     if (a < b) return 1;
// });
// console.log(arr);

// let arr = [5, 2, 1, -10, 8];
// arr.sort((a, b) => b - a);
// console.log(arr);

// let arr = ["HTML", "JavaScript", "CSS"];
// function copySorted(arr) {
//     let copyArr = arr.concat();
//     copyArr.sort();
//     return copyArr;
// }
// console.log(copySorted(arr));
// console.log(arr);

// let vasya = {
//     name: "Вася",
//     age: 25
// };
// let petya = {
//     name: "Петя",
//     age: 30
// };
// let masha = {
//     name: "Маша",
//     age: 28
// };
// let users = [vasya, petya, masha];
// let names = users.map(element => element.name);
// alert(names); // Вася, Петя, Маша

// let vasya = {
//     name: "Вася",
//     surname: "Пупкин",
//     id: 1
// };
// let petya = {
//     name: "Петя",
//     surname: "Иванов",
//     id: 2
// };
// let masha = {
//     name: "Маша",
//     surname: "Петрова",
//     id: 3
// };
// let users = [vasya, petya, masha];
// let usersMapped = users.map(element => {
//     let newObj = {
//         fullName : `${element.name} ${element.surname}`,
//         id: element.id,
//     };
//     return newObj;
// })
// console.log(usersMapped[0].id); // 1
// console.log(usersMapped[0].fullName);
// console.log(usersMapped);

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
// let arr = [vasya, petya, masha];
// function sortByAge(users) {
//     users.sort((a, b) => (a.age-b.age))
// }
// sortByAge(arr);
// console.log(arr[1].name); // Маша
// console.log(arr[2].name); // Петя
// console.log(arr[0].name); // Вася

// let arr = [1, 2, 3];
// function shuffle(array){
//     for (let i = array.length - 1; i > 0; i--) {
//         let num = Math.floor(Math.random() * (i + 1));
//         let d = array[num];
//         array[num] = array[i];
//         array[i] = d;
//     }
//     return array;
// };
// console.log(shuffle(arr));
// console.log(shuffle(arr));
// console.log(shuffle(arr));

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [vasya, petya, masha];
// function getAverageAge(users) {
//     let result = 0;
//     for (let i = 0; i < users.length; i++) {
//         result += users[i].age;
//     }
//     result = Math.round(result / users.length);
//     return result;
// }
// console.log(getAverageAge(arr));

// function unique(arr) {
//     let result = [];
//     for (let str of arr) {
//         if (!result.includes(str)) {
//             result.push(str);
//         }
//     }
//     return result;
// };

// let strings = ["кришна", "кришна", "харе", "харе",
//     "харе", "харе", "кришна", "кришна", ":-O"
// ];

// console.log(unique(strings)); // кришна, харе, :-O