import { Library } from "./library.js";
import { Book } from "./models/book.js"

export class Application {
    constructor() {
        this.library = new Library();
        this.bookIdToEdit = null;
    }

    addRow(book, tbody) {
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

        buttonEdit.onclick = (event) => {
            this.bookIdToEdit = event.target.dataset['id'];
            this.showForm();

            this.populateFormValues(book);
        }

        let buttonDelete = document.createElement('button');
        buttonDelete.className = 'button-delete';
        buttonDelete.innerHTML = 'delete';
        buttonDelete.setAttribute('data-id', book.id);
        row.cells[8].append(buttonDelete);
        buttonDelete.onclick = (event) => {
            let approveToDelete = confirm("Are you sure to delete book?");
            if (approveToDelete === true) {
                let id = event.target.dataset['id'];
                this.library.deleteBook(id);
                let table = document.getElementById('booksTable');

                for (let i = 0; i < table.rows.length; i++) {
                    if (table.rows[i].cells[1].innerHTML === id) {
                        table.deleteRow(i);
                        break;
                    }
                }
            }

        }
    }

    populateFormValues(book) {
        let form = document.getElementById('booksForm');
        form.elements['title'].value = book.title;
        form.elements['authors'].value = book.authors;
        let genres = form.elements['genres'].options;
        for (let i = 0; i < genres.length; i++) {
            if (book.genre.indexOf(genres[i].value, 0) != -1) {
                genres[i].selected = true;
            }
        }
        form.elements['publisher'].value = book.publisher;
        form.elements['publishDate'].value = this.convertToPickerDate(book.publishDate);
        form.elements['description'].value = book.description;
        form.elements['registrationDate'].value = this.convertToPickerDate(book.registrationDate);
    }

    convertToPickerDate(date) {
        let day = date.getDate()
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        month = (month < 10 ? "0" : "") + month;
        day = (day < 10 ? "0" : "") + day;

        return year + "-" + month + "-" + day;
    }

    renderBookTable() {
        let booksTable = document.getElementById('booksTable');
        if (booksTable.tBodies.length > 0) {
            booksTable.removeChild(booksTable.tBodies[0]);
        }

        let tbody = document.createElement('tbody');

        for (let i = 0; i < this.library.books.length; i++) {
            this.addRow(this.library.books[i], tbody);
        }

        booksTable.append(tbody);
    }
    init() {
        let showBooks = document.getElementsByClassName('show-books');
        showBooks[0].onclick = () => {
            this.showTable();
        }
        let addBook = document.getElementsByClassName('add-book');
        addBook[0].onclick = () => {
            this.showForm();

        }

        let sendBook = document.getElementsByClassName('send-book');
        sendBook[0].onclick = (event) => {
            event.preventDefault();
            if (this.bookIdToEdit) {
                this.updateBook();
            }
            else {
                this.addNewBook();
            }
        }
    }

    updateBook() {

        let changeableBook = this.extractFormData();
        changeableBook.id = this.bookIdToEdit;
        let result = changeableBook.isValid();
        let error = document.getElementsByClassName('error')[0];
        if (result.valid === true) {
            let index = this.library.books.findIndex((book) => book.id === changeableBook.id);
            if (index != -1) {
                this.library.books[index] = changeableBook;
                this.clearForm();
                this.renderBookTable();
                this.showTable();
                this.bookIdToEdit = null;
            }
            else {
                throw new Error(`book with id ${this.bookIdToEdit} was not found`);
            }
        }
        else {
            error.innerHTML = result.messages;
        }
    }


    addNewBook() {
        let addedBook = this.extractFormData();
        addedBook.id = '4-4444-4444-4';
        let result = addedBook.isValid();
        let error = document.getElementsByClassName('error')[0];
        addedBook.id = '4-4444-4444-4';
        if (result.valid === true) {

            let wasAdded = this.library.addBook(addedBook);
            if (wasAdded) {
                let booksTable = document.getElementById('booksTable');
                this.addRow(addedBook, booksTable.tBodies[0]);
                this.clearForm();
                this.showTable();
            }
            else {
                error.innerHTML = 'id is not unique';
            }

        }
        else {
            error.innerHTML = result.messages;
        }
    }
    extractFormData() {
        let form = document.getElementById('booksForm');
        let addedBook = new Book();
        addedBook.title = form.elements['title'].value;

        addedBook.authors = form.elements['authors'].value;
        addedBook.genre = Array.from(form.elements['genres'].selectedOptions)
            .map(option => option.value);
        addedBook.publisher = form.elements['publisher'].value;
        if (form.elements['publishDate'].value) {
            addedBook.publishDate = new Date(Date.parse(form.elements['publishDate'].value));
        }
        addedBook.description = form.elements['description'].value;
        if (form.elements['registrationDate'].value) {
            addedBook.registrationDate = new Date(Date.parse(form.elements['registrationDate'].value));
        }
        return addedBook;
    }

    showTable() {
        let addBook = document.getElementsByClassName('add-book');
        let booksForm = document.getElementsByClassName('books-form');
        let showBooks = document.getElementsByClassName('show-books');
        let table = document.getElementsByClassName('table');
        table[0].style = 'display:block';
        showBooks[0].style = 'display:none';
        addBook[0].style = 'display:block';
        booksForm[0].style = 'display:none'
    }
    showForm() {
        let addBook = document.getElementsByClassName('add-book');
        let table = document.getElementsByClassName('table');
        table[0].style = 'display:none';
        addBook[0].style = 'display:none';
        let showBooks = document.getElementsByClassName('show-books');
        showBooks[0].style = 'display:block';
        let booksForm = document.getElementsByClassName('books-form');
        booksForm[0].style = 'display:block'
    }
    clearForm() {
        let booksForm = document.getElementsByClassName('books-form');
        booksForm[0].reset();
    }
}
