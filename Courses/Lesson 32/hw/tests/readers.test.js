import { Reader } from "../models/reader.js";




function createReader() {
    let reader = new Reader();
    reader.ticketNumber = '5555-xxx-5555';
    reader.name = 'john';
    reader.surname = 'smith';
    return reader;
}

describe('reader',()=>{

test('validate, valid reader data, validation passed',()=>{
    let testReader = createReader();
    expect(()=>testReader.validate()).not.toThrowError();
});

test('validate, invalid reader ticketNumber, validation failed',()=>{
    let testReader = createReader();
    testReader.ticketNumber = '';
    expect(()=>testReader.validate()).toThrowError('ticketNumber is not valid');
});

test('validate, incorrect reader ticketNumber, validation failed',()=>{
    let testReader = createReader();
    testReader.ticketNumber = '555-xxxx-555';
    expect(()=>testReader.validate()).toThrowError('ticketNumber is not correct formatted 1111-XXX-1111');
});

test('validate, invalid reader name, validation failed',()=>{
    let testReader = createReader();
    testReader.name = '';
    expect(()=>testReader.validate()).toThrowError('name is not valid');
});

test('validate, invalid reader surname, validation failed',()=>{
    let testReader = createReader();
    testReader.surname = '';
    expect(()=>testReader.validate()).toThrowError('surname is not valid');
});

});