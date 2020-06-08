'use strict'

//     let card = {
//         cardName: 'utug',
//         type: 'with',
//         brand: 'tefal',
//         color: 'red',
//         price: '250by',
//         typeElem: 'div',
//         className: 'block',
//     }
//     function Card(params) {
//         this.cardName = params.cardName;
//         this.type = params.type;
//         this.brand = params.brand;
//         this.color = params.color;
//         this.price = params.price;
//     }

//     let wer = document.getElementById('app');

//     Card.prototype.createElement = function (elem) {
//         let el = document.createElement(elem.typeElem);
//         el.className = elem.className;
//         el.innerHTML = `<p>${elem.cardName}</p>
//                         <p>${elem.type}</p>
//                         <p>${elem.brand}</p>
//                         <p>${elem.color}</p>
//                         <p>${elem.price}</p>`
//         return el;
//     }
//     Card.prototype.insert = function (elem, where) {
//         where.append(elems);
//     }
//     let card1 = new Card(card);
//     let elems = card1.createElement(card);
//     card1.insert(elems,wer);

class User {
    constructor(info) {
        this.name = info.name;
        this.age = info.age;
    }
    info() {
        console.log(this.name)
    }
    setInfo(info) {
        this.name = info.name;
        this.age = info.age;
    }
}
let user = new User({
    name: 'Alex',
    age: 18,
});
console.log(user);
console.log(user.name);
user.info();
// user.setInfo({
//     name: 'Bob',
//     age: 25,
// });
console.log(user.name);
console.log(user);
setTimeout(user.setInfo(), 5000);
user.setInfo({
    name: 'Al',
    age: 30,
});
console.log(user);