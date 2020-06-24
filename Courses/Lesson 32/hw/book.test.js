import { Book } from "./book.js"

function createBook() {
    let book1 = new Book();
    book1.title = 'murder';
    book1.id = '1-1111-1111-2';
    book1.authors = ['agata', 'redberry'];
    book1.genre = ['classic', 'detective'];
    book1.publisher = 'ACT';
    book1.publishDate = new Date(2000, 11, 5);
    book1.description = 'blablabla';
    book1.registrationDate = new Date(2020, 2, 6);
    return book1;
}


test(' isValid correct book data, returns valid book', () => {
    let book = createBook();

    let result = book.isValid();

    expect(result.valid).toBeTruthy();
    expect(result.messages).toEqual([]);
});

test(' isValid incorrect book data, returns invalid book', () => {
    let book = createBook();
    book.id = '';

    let result = book.isValid();

    expect(result.valid).toBeFalsy();
    expect(result.messages).toEqual(["id is not correct formatted X-XXXX-XXXX-X", 'id is not filled']);
});

test(' isValid incorrect book data, returns invalid book', () => {
    let book = createBook();
    book.title = '';

    let result = book.isValid();

    expect(result.valid).toBeFalsy();
    expect(result.messages).toEqual(['title is not filled']);
});

test(' isValid incorrect book data, returns invalid book', () => {
    let book = createBook();
    book.authors = '';

    let result = book.isValid();

    expect(result.valid).toBeFalsy();
    expect(result.messages).toEqual(['authors is not filled']);
});

test(' isValid incorrect book data, returns invalid book', () => {
    let book = createBook();
    book.registrationDate = '';

    let result = book.isValid();

    expect(result.valid).toBeFalsy();
    expect(result.messages).toEqual(['registrationDate is not filled']);
});

test(' isValid incorrect book data, returns invalid book', () => {
    let book = createBook();
    book.publishDate = '';

    let result = book.isValid();

    expect(result.valid).toBeFalsy();
    expect(result.messages).toEqual(['publishDate is wrong']);
});

test(' isValid incorrect book data, returns invalid book', () => {
    let book = createBook();
    book.publishDate = new Date(1999);

    let result = book.isValid();

    expect(result.valid).toBeFalsy();
    expect(result.messages).toEqual(['publishDate is wrong']);
});