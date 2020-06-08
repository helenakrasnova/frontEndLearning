'use strict'
window.onload = function () {
    let form = document.forms.reg;
    let form2 = document.querySelector("form[name='reg']");

    function limit(count) {
        let countBlock = document.createElement('div');
        countBlock.innerHTML = `0/${count}`;
        //countBlock.id = `count`;
        let textarea = document.querySelector("form[name='reg'] textarea[name='about']");
        textarea.after(countBlock);
        textarea.oninput = function () {
            if (this.value.length > count) {
                this.value = this.value.slice(0, count);
            }
            countBlock.innerHTML = `${this.value.length}/${count}`
        }
        textarea.onchange = function () {
            console.log(this.value);
        }
    }
    function selectEvent() {
        let textarea = document.querySelector('form[name="reg"] select[name="city"]');
        textarea.onchange = function (e) {
            console.log(`value option: ${this.value} inner option: ${this.querySelector("option:checked").innerText}`);
        }
    }
    limit(25);
    selectEvent();




}