// function unique(arr) {
//     let newArr = new Set(arr);
//     return Array.from(newArr);

//   }

//   let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
//   ];

//   console.log( unique(values) ); // Hare, Krishna, :-O
// function aclean(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let presentValue = arr[i];
//         let arr 
//         for (let j = 0; j < arr[i].length; j++){

//         }
//     }
// }
// let arr = ["nap", "teachers", "cheaters",
//     "PAN", "ear", "era", "hectares"];

// console.log(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"
// let map = new Map();

// map.set("name", "John");

// let keys = Array.from(map.keys());

// // Error: keys.push is not a function
// // Ошибка: keys.push -- это не функция
// keys.push("more");




// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
// function aclean(arr) {
//     let newArr = arr.map(item => item.toLowerCase());
//     let dictionary = new Map();
//     for (let i = 0; i < newArr.length; i++) {
//         let key = newArr[i]
//             .split('')
//             .sort()
//             .join('');
//         if (!dictionary.has(key)) {
//             dictionary.set(key, newArr[i]);
//         }
//     }
//     return Array.from(dictionary.values());
// }
// console.log(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"

// //2. отсортировать буквы в словах
// //3.удалить дубликаты
