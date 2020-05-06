'use strict'
window.onload = function (){
let header = document.createElement('header');
header.className = "head-page";
document.body.append(header);
header.innerHTML = 'header';

let aside = document.createElement('aside');
aside.className = "left-page";
document.body.append(aside);
aside.innerHTML = 'aside';

let blocks = document.createElement('div');
blocks.className = "all-blocks";
document.body.append(blocks);

let div1 = document.createElement('div');
div1.className = "block";
blocks.append(div1);
div1.innerHTML = 'div';

let div2 = document.createElement('div');
div2.className = "block";
blocks.append(div2);
div2.innerHTML = 'div';

let div3 = document.createElement('div');
div3.className = "block";
blocks.append(div3);
div3.innerHTML = 'div';

let div4 = document.createElement('div');
div4.className = "block";
blocks.append(div4);
div4.innerHTML = 'div';

let footer = document.createElement('footer');
footer.className = "footer";
document.body.append(footer);
footer.innerHTML = 'footer';
}