'use strict'

// import { v4 as uuidv4 } from 'uuid.js';
import { Book } from "./models/book.js";
import { Library } from "./library.js";
import { Reader } from "./models/reader.js";

//ticketnumber и id уникальные

//npm, jest? юнит: тесты

//async await promise

//readers and books services меняем на http запросы  вместо загрузки из джейсона

//DOM


// let book1 = new Book();
// book1.title = 'murder';
// book1.id = '1-1111-1111-2';
// book1.authors = ['agata', 'redberry'];
// book1.genre = ['classic', 'detective'];
// book1.publisher = 'ACT';
// book1.publishDate = new Date(2000, 11, 5);
// book1.description = 'blablabla';
// book1.registrationDate = new Date(2020, 2, 6);

// let book2 = new Book();
// book2.title = 'flowers in London';
// book2.id = '2-2222-2222-3';
// book2.authors = ['doyle', 'gogol'];
// book2.genre = ['horror', 'roman'];
// book2.publisher = 'Times';
// book2.publishDate = new Date(2001, 10, 4);
// book2.description = 'kfkfkfkfkfkffkfkfkfk';
// book2.registrationDate = new Date(2019, 5, 5);

// let book3 = new Book();
// book3.title = 'beautiful flowers';
// book3.id = '3-3333-3333-4';
// book3.authors = ['pushkin', 'gogol'];
// book3.genre = ['drama', 'roman'];
// book3.publisher = 'Pops';
// book3.publishDate = new Date(2003, 4, 7);
// book3.description = 'fcndxnxb';
// book3.registrationDate = new Date(2020, 1, 1);

let library = new Library();
//library.books.push
// library.addBook(book1);
// library.addBook(book2);
// library.addBook(book3);

// let res = library.deleteBook('222222');
// res ? alert('deleted') : alert('false');

// let reader1 = new Reader();
// reader1.ticketNumber = '1111-xxx-1111';
// reader1.name = 'john';
// reader1.surname = 'smith';
// let reader2 = new Reader();
// reader2.ticketNumber = '2222-ccc-2222';
// reader2.name = 'ryan';
// reader2.surname = 'kelly';
// let reader3 = new Reader();
// reader3.ticketNumber = '3333-mmm-3333';
// reader3.name = 'kate';
// reader3.surname = 'pitt';
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
// library.addReader(reader1);
// library.addReader(reader2);
// library.addReader(reader3);
// library.addBookForReader('1111-xxx-1111', '2-2222-2222-2');
// library.addBookForReader('2222-ccc-2222', '1-1111-1111-1');
// library.addBookForReader('3333-mmm-3333', '3-3333-3333-3');
// library.addBookForReader('1111-xxx-1111', '3-3333-3333-3');
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



function addRow(book, tbody) {
    let row = tbody.insertRow(0);

    for (let i = 0; i < 9; i++) {
        row.insertCell(i);
    }
    row.cells[0].innerHTML = book.title;
    row.cells[1].innerHTML = book.id;
    row.cells[2].innerHTML = book.authors;
    row.cells[3].innerHTML = book.genre;
    row.cells[4].innerHTML = book.publisher;
    row.cells[5].innerHTML = book.publishDate.toDateString();
    row.cells[6].innerHTML = book.description;
    row.cells[7].innerHTML = book.registrationDate.toDateString();
    let buttonEdit = document.createElement('button');
    buttonEdit.className = 'button-edit';
    buttonEdit.innerHTML = 'edit';
    buttonEdit.setAttribute('data-id', book.id);
    row.cells[8].append(buttonEdit);
    
    let buttonDelete = document.createElement('button');
    buttonDelete.className = 'button-delete';
    buttonDelete.innerHTML = 'delete';
    buttonDelete.setAttribute('data-id', book.id);
    row.cells[8].append(buttonDelete);
    buttonDelete.onclick = function (event) {
        let id = event.target.dataset['id'];
        library.deleteBook(id);
        let table = document.getElementById('booksTable');

        for (let i = 0; i < table.rows.length; i++) {
            if (table.rows[i].cells[1].innerHTML === id) {
                table.deleteRow(i);
                break;
            }
        }
    }
}

function renderBookTable() {

    let tbody = document.createElement('tbody');


    for (let i = 0; i < library.books.length; i++) {
        addRow(library.books[i], tbody);
    }

    let booksTable = document.getElementById('booksTable');
    booksTable.append(tbody);
}
renderBookTable();


let addBook = document.getElementsByClassName('add-book');
addBook[0].onclick = function () {
    showForm();
    let showBooks = document.getElementsByClassName('show-books');
    showBooks[0].onclick = function () {
        showTable();
    }
}
let sendBook = document.getElementsByClassName('send-book');
sendBook[0].onclick = function (event) {
    event.preventDefault();
    let form = document.getElementById('booksForm');
    let addedBook = new Book();
    addedBook.title = form.elements['title'].value;
    addedBook.id = '4-4444-4444-4';
    addedBook.authors = form.elements['authors'].value;
    addedBook.genre = Array.from(form.elements['genres'].selectedOptions)
        .map(option => option.value);
    addedBook.publisher = form.elements['publisher'].value;
    addedBook.publishDate = new Date(Date.parse(form.elements['publishDate'].value));
    addedBook.description = form.elements['description'].value;
    addedBook.registrationDate = new Date(Date.parse(form.elements['registrationDate'].value));
    library.addBook(addedBook);
    let booksTable = document.getElementById('booksTable');
    addRow(addedBook, booksTable.tBodies[0]);
    clearForm();
    showTable();
}

function showTable() {
    let booksForm = document.getElementsByClassName('books-form');
    let showBooks = document.getElementsByClassName('show-books');
    let table = document.getElementsByClassName('table');
    table[0].style = 'display:block';
    showBooks[0].style = 'display:none';
    addBook[0].style = 'display:block';
    booksForm[0].style = 'display:none'
}
function showForm() {
    let table = document.getElementsByClassName('table');
    table[0].style = 'display:none';
    addBook[0].style = 'display:none';
    let showBooks = document.getElementsByClassName('show-books');
    showBooks[0].style = 'display:block';
    let booksForm = document.getElementsByClassName('books-form');
    booksForm[0].style = 'display:block'
}
function clearForm() {
    let booksForm = document.getElementsByClassName('books-form');
    booksForm[0].reset();
}