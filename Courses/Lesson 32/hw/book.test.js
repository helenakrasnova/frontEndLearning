import { Book } from "./book.js"

test(' isValid correct book data, returns valid book', () => {
    let book1 = new Book();
    book1.title = 'murder';
    book1.id = '1-1111-1111-2';
    book1.authors = ['agata', 'redberry'];
    book1.genre = ['classic', 'detective'];
    book1.publisher = 'ACT';
    book1.publishDate = new Date(2000, 11, 5);
    book1.description = 'blablabla';
    book1.registrationDate = new Date(2020, 2, 6);

    let result = book1.isValid();

    expect(result.isValid).toBeTruthy();
    expect(result.messages).toEqual([]);
});

test(' isValid incorrect book data, returns invalid book', () => {
    let book1 = new Book();
    book1.title = 'murder';
    book1.authors = ['agata', 'redberry'];
    book1.genre = ['classic', 'detective'];
    book1.publisher = 'ACT';
    book1.publishDate = new Date(2000, 11, 5);
    book1.description = 'blablabla';
    book1.registrationDate = new Date(2020, 2, 6);

    let result = book1.isValid();

    expect(result.isValid).toBeFalsy();
    expect(result.messages).toEqual(["id is not correct formatted X-XXXX-XXXX-X",'id is not filled']);
});