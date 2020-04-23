// let calculator = {
//     read() {
//         calculator.propertyFirst = +prompt('');
//         calculator.propertySecond = +prompt('');
//     },
//     sum() {
//         let sum = calculator.propertyFirst + calculator.propertySecond;
//         return sum;
//     },
//     mul() {
//         let mul = calculator.propertyFirst * calculator.propertySecond;
//         return mul;
//     },
// }
// calculator.read();
// console.log(calculator);
// console.log(calculator.sum());
// console.log(calculator.mul());

// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         return this;
//     },
//     down() {
//         this.step--;
//         return this;
//     },
//     showStep: function () { // показывает текущую ступеньку
//         alert(this.step);
//         return this;
//     }
// };
// ladder.up().up().down().showStep();