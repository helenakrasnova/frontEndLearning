import { BooksService } from "./services/booksService.js";
import { ReadersService } from "./services/readersService.js";
export class Library {

    constructor() {
        let booksService = new BooksService();
        let readersService = new ReadersService();
        this.readers = readersService.loadReaders();
        this.books = booksService.load();
    }

    addBook(book) {

        let index = this.books.findIndex((b) => b.id === book.id);
        if (index === -1) {
            this.books.push(book);
            return true;
        }
        else {
            return false;
        }
    }

    deleteBook(id) {
        let index = this.books.findIndex((value) => value.id === id);
        if (index > -1) {
            this.books.splice(index, 1);
            return true;
        }
        else {
            return false;
        }
    }

    getById(id) {
        let index = this.books.findIndex((value) => value.id === id);
        return this.books[index];
    }

    getAll() {
        return this.books;
    }
    // searchByTitle(title){
    //     return this.books.filter((value) => value.title.includes(title));
    // }

    searchByTitle(title) {
        let result = [];
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].title.includes(title)) {
                result.push(this.books[i]);
            }
        }
        return result;
    }

    searchByPublishDate(publishDate) {
        let result = [];
        for (let i = 0; i < this.books.length; i++) {

            if (this.books[i].publishDate.getFullYear() === publishDate.getFullYear() &&
                this.books[i].publishDate.getMonth() === publishDate.getMonth() &&
                this.books[i].publishDate.getDate() === publishDate.getDate()) {
                result.push(this.books[i]);
            }
        }
        return result;
    }

    searchByAuthors(authors) {
        return this.books.filter((value) => value.authors.includes(authors));
    }

    getAllSorted(order = 'asc') {
        let result = [];
        for (let i = 0; i < this.books.length; i++) {
            result.push(this.books[i]);
        }

        if (order === 'asc') {
            result.sort((a, b) => a.publishDate.getTime() - b.publishDate.getTime());
        }
        else if (order === 'desc') {
            result.sort((a, b) => b.publishDate.getTime() - a.publishDate.getTime());
        }
        return result;
    }

    addReader(reader) {
        if (!reader) {
            return false;
        }

        try {
            reader.validate();
        } catch (error) {
            console.log(error);
            return false;
        }
        this.readers.push(reader);
        return true;
    }

    showReaders() {
        return this.readers;
    }

    addBookForReader(ticketNumber, id) {
        let availableBooks = this.getAvailableBooks();
        if (!availableBooks || availableBooks.length === 0) {
            return false;
        }
        let existingBook = availableBooks.find(b => b.id === id);
        if (!existingBook) {
            return false;
        }
        let existingReader = this.readers.find(r => r.ticketNumber === ticketNumber);
        if (!existingReader) {
            return false;
        }
        existingReader.readersBooks.push(existingBook.id);
        return true;
    }

    showReadersBooks(ticketNumber) {
        let result = [];
        let existingReader = this.readers.find(r => r.ticketNumber === ticketNumber);
        if (!existingReader) {
            return result;
        };
        for (let i = 0; i < existingReader.readersBooks.length; i++) {
            let existingBook = this.books.find(b => b.id === existingReader.readersBooks[i]);
            result.push(existingBook);
        };
        return result;
    }

    getAvailableBooks() {
        let takenBooks = [];
        let availableBooks = [];
        for (let i = 0; i < this.readers.length; i++) {
            for (let j = 0; j < this.readers[i].readersBooks.length; j++) {
                takenBooks.push(this.readers[i].readersBooks[j]);
            }
        }

        for (let i = 0; i < this.books.length; i++) {
            let res = takenBooks.find(b => b === this.books[i].id);
            if (!res) {
                availableBooks.push(this.books[i]);
            }
        }

        return availableBooks;

    }
}