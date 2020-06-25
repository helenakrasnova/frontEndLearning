export class Reader {
    constructor() {
        this.ticketNumber = '';
        this.name = '';
        this.surname = '';
        this.readersBooks = [];
    }
    validate(){
        let ticketNumberRegExp = /^\d{4}-[a-z]{3}-\d{4}$/gi;
        if (!this.ticketNumber) {
           throw new Error('ticketNumber is not valid');
        }
        if (!this.ticketNumber.match(ticketNumberRegExp)) {
            throw new Error('ticketNumber is not correct formatted 1111-XXX-1111');
        }
        if (!this.name) {
            throw new Error('name is not valid');
        }
        if (!this.surname) {
            throw new Error('surname is not valid');
        }
    }
}