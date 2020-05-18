//task1
// let user = {};
// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user.name;

//task2
// function isEmpty(obj){
//     for (let key in obj){
//         return false;
//     }
//     return true;
// }
// let schedule = {};
// console.log( isEmpty(schedule) );
// schedule["8:30"] = "get up";
// console.log( isEmpty(schedule) ); 

//task4
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// };
// let sum = 0;
// for (let key in salaries) {
//     sum += salaries[key];
// }
// console.log(sum);

//task5
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };
// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         if (typeof(obj[key]) === 'number') {
//             obj[key] *= 2;
//         }
//     }
// }
// multiplyNumeric(menu);
// console.log(menu);

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };
// function sumSalaries(obj) {
//     let arr = [];
//     let sum = 0;
//     arr = Object.values(obj);
//     for (let value of arr) {
//         sum += value;
//     }
//     return sum;
// }
// console.log(sumSalaries(salaries));
// let user = {
//     name: 'John',
//     age: 30,
//     country: 2,
// };
// function count(obj) {
//     let c = 0;
//     for (let value of Object.keys(obj)) {
//         c++;
//     }
//     return c;
// }
// console.log(count(user));

// let user = {
//     name: "John",
//     years: 30
// };
// let { name, years: age, isAdmin = false } = user;
// console.log(name); 
// console.log(age); 
// console.log(isAdmin); 

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };
// function topSalary(obj) {
//     let arr = Object.entries(obj);
//     let maxKey = null;
//     let maxValue = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let [name, salary] = arr[i];
//         if (maxValue < salary) {
//             maxKey = name;
//             maxValue = salary;
//         }
//     }
//     return maxKey;

// }
// console.log(topSalary(salaries));