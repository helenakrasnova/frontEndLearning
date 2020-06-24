import { initialData } from "./booksInitialData.js";

export class BooksService {
    load() {
        return JSON.parse(initialData, function (key, value) {
            if (key == 'publishDate' || key === 'registrationDate') {
                return new Date(value);
            }

            return value;
        });
    }
}