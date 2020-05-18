// 'use strict'
window.onload = function () {
    // let a = document.getElementById('two');
    // for (let i = 0; i < 3; i++) {
    //     let clone = a.cloneNode(true);
    //     document.body.insertAdjacentElement('world', clone);
    // }

    let krestiki = document.getElementById('krestiki');
    for (let i = 0; i < 9; i++) {
        krestiki.innerHTML += '<div class=\'block\'></div>';
    }
    let step = 0;
    let draw = null;
    krestiki.onclick = function (e) {
        if (e.target.className === 'block') {
            if (step % 2 === 0) {
                e.target.innerHTML = 'X';
            }
            else {
                e.target.innerHTML = 'O';
            }
            if(e.target.innerHTML === 'X'){

            }
        }
        step++;
        victory();
    }
    function victory() {
        let allblock = document.getElementsByClassName('block');
        if (allblock[0].innerHTML === 'X' && allblock[1].innerHTML === 'X' && allblock[2].innerHTML === 'X') {
            allblock[0].style.color = 'red';
            allblock[1].style.color = 'red';
            allblock[2].style.color = 'red';
            draw = 1;
            document.body.insertAdjacentHTML('afterbegin', '<h1>Победа крестиков</h1>');

        }
        if (step === 9 && draw === null) {
            alert('ничья');
        }
    }
}
