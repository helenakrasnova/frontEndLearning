'use strict'
// window.onload = function () {
// let block = document.getElementsByClassName('block');
// block.name = 'named block';
// for (let i = 0; i<block.length;i++){
//     console.log();
// }
// function ce(name = 'div', text, className, event, fn) {
//     let elem = document.createElement(name);
//     text != undefined ? elem.innerHTML = text : null;
//     className != undefined && elem.className != null ? elem.className = className : null;
//     event != undefined ? elem.addEventListener(event, fn) : null;
// return elem;
// }
// function run() {
//     console.log(111);
// }
// let but = ce('div', 'Text', 'box', 'click', run);
// let vasya = ce('H1', 'Hello', 'box', 'click', run);
// document.body.prepend(but);
// document.body.prepend(vasya);

// }



//     задача 2

//     let elem = document.getElementById('elem');
//     function clear(elem){
//     while (elem.firstChild) {
//         elem.firstChild.remove();
//     }
// }
// clear(elem); // очищает список
// console.log(elem);

//задача4    
// let h1 = document.createElement('h1');
// h1.textContent = 'Создайте список';
// document.body.append(h1);

// let ul = document.createElement('ul');
// document.body.append(ul);
// let arr = [];
// let value;
// do {
//     value = prompt('');
//     if (value) {
//         arr.push(value);
//     }
// } while (value);
// for (let i = 0; i < arr.length; i++) {
//     let li = this.document.createElement('li');
//     li.textContent = arr[i];
//     ul.append(li);
// }


// let data = {
//     "Рыбы": {
//         "форель": {},
//         "лосось": {}
//     },

//     "Деревья": {
//         "Огромные": {
//             "секвойя": {},
//             "дуб": {}
//         },
//         "Цветковые": {
//             "яблоня": {},
//             "магнолия": {}
//         }
//     }
// };
// function createNode(obj, key, element) {
//     if (Object.values(obj).length != 0) {
//         let ul = document.createElement('ul');
//         element.append(ul);
//         for (let key in obj) {
//             return createNode(obj[key], key, ul);
//         }
//     }
//     else {
//         let li = document.createElement('li');
//         li.textContent = key;
//         element.append(li);

//     }
// }
// function createTree(container, data) {
//     let ul = document.createElement('ul');
//     container.append(ul);
//     for (let key in data) {
//         createNode(data[key], key, ul);
//     }
// }
// createTree(document.getElementById('tree'), data);
// let timerId ;
// function clockStart() {
//     timerId = setInterval(() => {
//         let now = new Date();
//         let collection = document.getElementById('clock').children;
//         collection[0].textContent = now.getHours();
//         collection[1].textContent = now.getMinutes();
//         collection[2].textContent = now.getSeconds();
//     }, 1000);
// }
// function clockStop() {
    
//     clearInterval(timerId);
// }
