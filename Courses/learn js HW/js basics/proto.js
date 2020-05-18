// let head = {
//     glasses: 1
//   };

//   let table = {
//     pen: 3, 
//     __proto__ : head
//   };

//   let bed = {
//     sheet: 1,
//     pillow: 2, 
//     __proto__ : table
//   };

//   let pockets = {
//     money: 2000, 
//     __proto__ : bed
//   };

// let hamster = {


//     eat(food) {
//         this.stomach.push(food);
//     }
// };

// let speedy = {
//     stomach: [],
//     __proto__: hamster
// };

// let lazy = {
//     stomach: [],
//     __proto__: hamster
// };

// // Этот хомяк нашёл еду
// speedy.eat("apple");
// alert(speedy.stomach); // apple

// // У этого хомяка тоже есть еда. Почему? Исправьте
// alert(lazy.stomach); // apple
// function Rabbit(){
//     this.eats = true
// }
// let rabbit = new Rabbit();

// let rabbit2 = new rabbit.constructor();

// Function.prototype.defer = function (ms){
//     setTimeout(testFunction,ms);
// }
// function testFunction() {
//     console.log("Hello!");
// }
// testFunction.defer(1000); // выведет "Hello!" через 1 секунду

// function testFunction(a, b) {
//     console.log(a + b);
// }
// Function.prototype.defer = function (ms) {
      
// }
// testFunction.defer(1000)(1, 2); // выведет 3 через 1 секунду.

// let dictionary = Object.create(null);
// dictionary.toString = function(){
//    return Object.keys(this);
// }
// // ваш код, который добавляет метод dictionary.toString

// // добавляем немного данных
// dictionary.apple = "Apple";
// dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

// // только apple и __proto__ выведены в цикле
// for(let key in dictionary) {
//   alert(key); // "apple", затем "__proto__"
// }

// // ваш метод toString в действии
// alert(dictionary); // "apple,__proto__"