'use strict'
window.onload = function () {
    function randomInteger(min, max) {
        // получить случайное число от (min-0.5) до (max+0.5)
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }
    function ce(name = 'div', text, className, event, fn) {
        let elem = document.createElement(name);
        text != undefined ? elem.innerHTML = text : null;
        className != undefined && elem.className != null ? elem.className = className : null;
        event != undefined ? elem.addEventListener(event, fn) : null;
        return elem;
    }
    document.querySelector('body').onclick = function (e) {
        let x = e.clientX;
        let y = e.clientY;
        let r = randomInteger(10, 35);
        let colorR = randomInteger(0, 255);
        let colorG = randomInteger(0, 255);
        let colorB = randomInteger(0, 255);
        let elem = ce('div', undefined, 'circle');
        elem.style.width = `${r}px`;
        elem.style.height = `${r}px`;
        elem.style.top = `${y}px`;
        elem.style.left = `${x}px`;
        elem.style.background = `rgb(${colorR, colorG, colorB})`;
        this.append(elem);
    }
document.querySelector('body').oncontextmenu = function(e){
    e.preventDefault();
   if (e.target.classList.contains('circle')){
       e.target.remove();
   }
}



}














}