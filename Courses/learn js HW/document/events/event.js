window.onload = function () {
    // let hider = this.document.getElementById('hider');

    // hider.onclick = function () {
    //     // let text = document.getElementById('text');
    //     // text.innerHTML = '';
    //     // text.style.display = 'none';
    //     hider.style.display = 'none';
    //}
    // let text = document.getElementById('text');
    // let ul = document.getElementsByTagName('ul')[0];
    // let open = document.getElementById('open');
    // let close = document.getElementById('close');
    // text.onclick = function (){
    //     ul.classList.toggle('hiddenText');
    //     open.classList.toggle('hiddenText');
    //     close.classList.toggle('hiddenText');
    // }
    let removeButtons = document.getElementsByClassName('remove-button');
    for (let i = 0; i < removeButtons.length; i++) {
        removeButtons[i].onclick = function (event) {
           let parent = this.closest('div');
           parent.style.display = 'none';
        }
    }
}