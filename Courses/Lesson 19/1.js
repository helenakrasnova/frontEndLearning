"use strict"
// function getNumber() {
//     let a = null;
//     do {
//          a = +prompt('');
//     }
//     while (isNaN(a)===true );
//     return a;
// }
// console.log(getNumber());
const num = ()=>{
    let a = null;
    do {
         a = +prompt('');
    }
    while (isNaN(a)===true );
    return a;
}
console.log(num());