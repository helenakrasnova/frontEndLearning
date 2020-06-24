'use strict'

import { Book } from "./book.js";
import { Library } from "./library.js";
import { Reader } from "./reader.js";

//ticketnumber и id уникальные

//npm, jest? юнит: тесты

//async await promise

//readers and books services меняем на http запросы  вместо загрузки из джейсона

//DOM
export let sum = (a, b) => a + b;

let book1 = new Book();
book1.title = 'murder';
book1.id = '1-1111-1111-2';
book1.authors = ['agata', 'redberry'];
book1.genre = ['classic', 'detective'];
book1.publisher = 'ACT';
book1.publishDate = new Date(2000, 11, 5);
book1.description = 'blablabla';
book1.registrationDate = new Date(2020, 2, 6);

let book2 = new Book();
book2.title = 'flowers in London';
book2.id = '2-2222-2222-3';
book2.authors = ['doyle', 'gogol'];
book2.genre = ['horror', 'roman'];
book2.publisher = 'Times';
book2.publishDate = new Date(2001, 10, 4);
book2.description = '[kfkfkfkfkfkffkfkfkfk]';
book2.registrationDate = new Date(2019, 5, 5);

let book3 = new Book();
book3.title = 'beautiful flowers';
book3.id = '3-3333-3333-4';
book3.authors = ['pushkin', 'gogol'];
book3.genre = ['drama', 'roman'];
book3.publisher = 'Pops';
book3.publishDate = new Date(2003, 4, 7);
book3.description = '[fcndxnxb]';
book3.registrationDate = new Date(2020, 1, 1);

let library = new Library();
//library.books.push
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

// let res = library.deleteBook('222222');
// res ? alert('deleted') : alert('false');

let reader1 = new Reader();
reader1.ticketNumber = '1111-xxx-1111';
reader1.name = 'john';
reader1.surname = 'smith';
let reader2 = new Reader();
reader2.ticketNumber = '2222-ccc-2222';
reader2.name = 'ryan';
reader2.surname = 'kelly';
let reader3 = new Reader();
reader3.ticketNumber = '3333-mmm-3333';
reader3.name = 'kate';
reader3.surname = 'pitt';
// library.deleteBook('111111');
// console.log(library.getAll());
//  console.log(library.getById('111111'))
// console.log(library.searchByTitle('flowers'));
// console.log(library.searchByPublishDate(new Date(1999, 4, 7)));
// console.log(library.searchByPublishDate(new Date(1999, 4, 8)));
// console.log(library.searchByAuthors('doyle'));
// console.log(library.searchByAuthors('pushk'));
// console.log(library.getAllSorted());
// console.log(library.getAllSorted('asc'));
// console.log(library.getAllSorted('desc'));
library.addReader(reader1);
library.addReader(reader2);
library.addReader(reader3);
library.addBookForReader('1111-xxx-1111', '2-2222-2222-2');
library.addBookForReader('2222-ccc-2222', '1-1111-1111-1');
library.addBookForReader('3333-mmm-3333', '3-3333-3333-3');
library.addBookForReader('1111-xxx-1111', '3-3333-3333-3');
// console.log(reader1);
// console.log(library.showReadersBooks('333'));



// let func = (a) => {
//     if (a > 5) {
//         return true;
//     }
//     else {
//         return false;
//     }
// };

// let func = a => a > 5;


// function func(a) {
//     if (a > 5) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// let array = [1, 2, 3, 4, 5, 6];
// function filter(array, predicate) {
//     let newArr = [];
//     for (let i = 0; i < array.length; i++) {
//         if (predicate(array[i])) {
//             newArr.push(array[i]);
//         }
//     }
//     return newArr;
// }

// console.log(filter(array, a => a > 5));
// console.log(filter(array, a => a > 5));

// console.log(book1.isValid());
// console.log(library.getAvaliableBooks());
// console.log(library.books);
// console.log(library.readers);
// try {
//     debugger
//     let a = 5; 
//     throw new Error('test');

// }
// catch(ex){
//     console.log(ex);
//     throw ex ;
// }
// finally{

// }


//folder structure

// models - book.js reader.js
// services
// initialData
// tests
//root index.js indexhtml. library 

