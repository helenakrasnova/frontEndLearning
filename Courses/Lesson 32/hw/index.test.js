import { sum } from "./index.js"

test('sum a+b return c',()=>{
    let result = sum(5,2);
    expect(result).toBe(7);
});