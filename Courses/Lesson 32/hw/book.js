import { ValidationResult } from "./validationResult.js";

export class Book {
    constructor() {
        this.title = '';
        this.id = '';
        this.authors = [];
        this.genre = [];
        this.publisher = '';
        this.publishDate = null;
        this.description = '';
        this.registrationDate = null;
    }
    isValid() {

        let newValidation = new ValidationResult();
        let isbnRegExp = /\d-\d{4}-\d{4}-\d/g;

        if (!this.title) {
            newValidation.messages.push('title is not filled');
        }
        if (!this.id.match(isbnRegExp)) {
            newValidation.messages.push('id is not correct formatted X-XXXX-XXXX-X');
        }
        if (!this.id) {
            newValidation.messages.push('id is not filled');
        }
        if (!this.authors) {
            newValidation.messages.push('authors is not filled');
        }
        if (!this.registrationDate) {
            newValidation.messages.push('registrationDate is not filled');
        }
        if (!this.publishDate || this.publishDate.getFullYear() < 2000) {
            newValidation.messages.push('publishDate is wrong');
        }
        if (newValidation.messages.length === 0) {
            newValidation.isValid = true;
        }
        return newValidation;
    }
}