import { Library } from "../library.js";
import { Book } from "../models/book.js";
import { Reader } from "../models/reader.js";

function createLibrary() {
    let library = new Library();
    return library;
}

function createBook() {
    let book = new Book();
    book.title = 'murder';
    book.id = '1-1111-1111-2';
    book.authors = ['agata', 'redberry'];
    book.genre = ['classic', 'detective'];
    book.publisher = 'ACT';
    book.publishDate = new Date(2020, 1, 2);
    book.description = 'blablabla';
    book.registrationDate = new Date(2020, 2, 6);
    return book;
}

function createReader() {
    let reader = new Reader();
    reader.ticketNumber = '5555-xxx-5555';
    reader.name = 'john';
    reader.surname = 'smith';
    return reader;
}

test('addBook correct book data, book was added', () => {
    let testLibrary = createLibrary();
    let testBook = createBook();

    let result = testLibrary.addBook(testBook);

    expect(result).toBeTruthy();
});

test('addBook not correct book data, book was not added', () => {
    let testLibrary = createLibrary();
    let testBook = createBook();
    testBook.title = '';
    let result = testLibrary.addBook(testBook);

    expect(result).toBeFalsy();
});

test('deleteBook correct book id, book deleted successfully', () => {
    let testLibrary = createLibrary();
    let testBook = createBook();
    testLibrary.addBook(testBook);
    let result = testLibrary.deleteBook(testBook.id);

    expect(result).toBeTruthy();
});

test('deleteBook incorrect book id, book deleted unsuccessfully', () => {
    let testLibrary = createLibrary();
    let testBook = createBook();
    testLibrary.addBook(testBook);

    let result = testLibrary.deleteBook('0-0000-0000-0');

    expect(result).toBeFalsy();
});

test('getById correct book id, returns desired book', () => {
    let testLibrary = createLibrary();
    let testBook = createBook();
    testLibrary.addBook(testBook);

    let result = testLibrary.getById('1-1111-1111-2');

    expect(result).toBe(testBook);
});

test('getById incorrect book id, nothing returns', () => {
    let testLibrary = createLibrary();
    let testBook = createBook();
    testLibrary.addBook(testBook);

    let result = testLibrary.getById('1-1111-1111-0');

    expect(result).toBe();
});


test('getAll correct book id, returns all books in array', () => {
    let testLibrary = createLibrary();
    let testBook = createBook();
    testLibrary.addBook(testBook);

    let result = testLibrary.getAll();

    expect(result.length).toBe(4);
});

test('searchByTitle correct book title, returns desired books', () => {
    let testLibrary = createLibrary();
    let testBook = createBook();
    testLibrary.addBook(testBook);

    let result = testLibrary.searchByTitle('murder');

    expect(result.length).toEqual(2);
    let book1 = result.find((item) => item.id === '1-1111-1111-2');
    expect(book1).toBeDefined();
    let book2 = result.find((item) => item.id === '1-1111-1111-1');
    expect(book2).toBeDefined();
});

test('searchByPublishDate correct book publish date, returns desired books', () => {
    let testLibrary = createLibrary();
    let testBook = createBook();
    testLibrary.addBook(testBook);
    let testDate = new Date(2020, 1, 2);

    let result = testLibrary.searchByPublishDate(testDate);

    expect(result.length).toEqual(1);
    let book1 = result.find((item) => item.id === '1-1111-1111-2');
    expect(book1).toBeDefined();
});

test('searchByAuthors correct book authors array, returns desired books', () => {
    let testLibrary = createLibrary();
    let testBook = createBook();
    testLibrary.addBook(testBook);

    let result = testLibrary.searchByAuthors('agata');

    expect(result.length).toEqual(2);
    let book1 = result.find((item) => item.id === '1-1111-1111-2');
    expect(book1).toBeDefined();
    let book2 = result.find((item) => item.id === '1-1111-1111-1');
    expect(book2).toBeDefined();
});

test('getAllSorted asc order, returns sorted books', () => {
    let testLibrary = createLibrary();
    let testBook = createBook();
    testLibrary.addBook(testBook);

    let result = testLibrary.getAllSorted('asc');

    expect(result[0].id).toBe('1-1111-1111-1');
    expect(result[1].id).toBe('2-2222-2222-2');
    expect(result[2].id).toBe('3-3333-3333-3');
    expect(result[3].id).toBe('1-1111-1111-2');
});

test('getAllSorted desc order, returns sorted books', () => {
    let testLibrary = createLibrary();
    let testBook = createBook();
    testLibrary.addBook(testBook);

    let result = testLibrary.getAllSorted('desc');

    expect(result[0].id).toBe('1-1111-1111-2');
    expect(result[1].id).toBe('3-3333-3333-3');
    expect(result[2].id).toBe('2-2222-2222-2');
    expect(result[3].id).toBe('1-1111-1111-1');
});

test('addReader valid test reader data, returns true', () => {
    let testLibrary = createLibrary();
    let testReader = createReader();

    let result = testLibrary.addReader(testReader);

    expect(result).toBeTruthy();
});

test('addReader invalid test reader data, returns false', () => {
    let testLibrary = createLibrary();
    let testReader = createReader();
    testReader.surname = '';

    let result = testLibrary.addReader(testReader);

    expect(result).toBeFalsy();
});

test('addReader invalid test reader data, returns false', () => {
    let testLibrary = createLibrary();
    let testReader = undefined;

    let result = testLibrary.addReader(testReader);

    expect(result).toBeFalsy();
});

test('showReaders, returns  readers array', () => {
    let testLibrary = createLibrary();
    let testReader = createReader();
    testLibrary.addReader(testReader);

    let result = testLibrary.showReaders();

    expect(result.length).toBe(4);
});

test('getAvailableBooks,  returns available books array', () => {
    let testLibrary = createLibrary();
    let testReader = createReader();
    let testBook = createBook();
    testLibrary.addReader(testReader);
    testLibrary.addBook(testBook);

    let result = testLibrary.getAvailableBooks();

    expect(result.length).toBe(1);
});

test('addBookForReader, valid reader ticketNumber and invalid book id, returns  readers false', () => {
    let testLibrary = createLibrary();
    let testReader = createReader();
    testLibrary.addReader(testReader);

    let result = testLibrary.addBookForReader(testReader.ticketNumber, '1-1111-1111-2');

    expect(result).toBeFalsy();
});

test('addBookForReader, valid reader ticketNumber and invalid book id, returns  readers false', () => {
    let testLibrary = createLibrary();
    let testReader = createReader();
    testLibrary.addReader(testReader);
    let testBook = createBook();
    testLibrary.addBook(testBook);

    let result = testLibrary.addBookForReader(testReader.ticketNumber, '6-6666-6666-6');

    expect(result).toBeFalsy();
});


test('addBookForReader, invalid reader ticketNumber and valid book id, returns  readers false', () => {
    let testLibrary = createLibrary();
    let testReader = createReader();
    let testBook = createBook();
    testLibrary.addReader(testReader);
    testLibrary.addBook(testBook);

    let result = testLibrary.addBookForReader('', '1-1111-1111-2');

    expect(result).toBeFalsy();
});

test('addBookForReader, valid reader ticketNumber and book id, returns  readers true', () => {
    let testLibrary = createLibrary();
    let testReader = createReader();
    let testBook = createBook();
    testLibrary.addReader(testReader);
    testLibrary.addBook(testBook);

    let result = testLibrary.addBookForReader(testReader.ticketNumber, '1-1111-1111-2');

    expect(result).toBeTruthy();
});

test('showReadersBooks, valid reader ticketNumber, returns  existing books', () => {
    let testLibrary = createLibrary();
    let testReader = createReader();
    let testBook = createBook();
    testLibrary.addReader(testReader);
    testLibrary.addBook(testBook);
    testLibrary.addBookForReader(testReader.ticketNumber, '1-1111-1111-2')

    let result = testLibrary.showReadersBooks('5555-xxx-5555');

    expect(result.length).toBe(1);
});

test('showReadersBooks, invalid reader ticketNumber, returns empty array', () => {
    let testLibrary = createLibrary();
    let testReader = createReader();
    let testBook = createBook();
    testLibrary.addReader(testReader);
    testLibrary.addBook(testBook);
    testLibrary.addBookForReader(testReader.ticketNumber, '1-1111-1111-2')

    let result = testLibrary.showReadersBooks('5555-xxx-5556');

    expect(result.length).toBe(0);
});