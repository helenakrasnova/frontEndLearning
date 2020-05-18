// function sumTo(n) {
//     let sum = 0;
//     for (let i = 0; i < n+1; i++) {
//         sum += i;
//     }
//     return sum;
// }

// console.log(sumTo(100)); // 5050
// function sumTo(n) {
//     if (n > 1) {
//         return n + sumTo(n - 1);
//     }
//     else {
//         return n;
//     }
// }
// console.log(sumTo(100)); // 5050

// function factorial(n) {
//     let result = 1;
//     if (n === 1) {
//         return n;
//     }
//     else {
//         return n * factorial(n-1);
//     }
// }
// console.log(factorial(8));

// function fib(n) {
//     if (n <= 1) {
//         return n;
//     }
//     else {
//         return fib(n - 1) + fib(n - 2);
//     }

// }

// console.log(fib(3)); // 2
// console.log(fib(7)); // 13
// console.log(fib(77)); // 5527939700884757

// let list = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null
//             }
//         }
//     }
// };
// // function printList(list) {
// //     console.log(list.value);
// //     let nextElement = list.next;
// //     while (nextElement) {
// //         console.log(nextElement.value);
// //         nextElement = nextElement.next;
// //     }
// // }
// // printList(list);
// // function printList(element) {
// //     if (element.next) {
// //         printList(element.next);
// //     }
// //     console.log(element.value);
// // }
// // printList(list);
// function printList(element) {
//     console.log(element.value);
//     if (element.next) {
//         printList(element.next);
//     }
    
// }
// printList(list);