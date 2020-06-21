import { initialData } from "./booksInitialData.js";

export class BooksService {
    load() {
        return JSON.parse(initialData);
    }
}