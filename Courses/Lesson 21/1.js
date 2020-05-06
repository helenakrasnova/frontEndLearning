window.onload = function(){
document.getElementById('content').addEventListener('click',runToggle);
function runToggle() {
    let content = document.getElementById('content');
    let toggle = document.getElementById('toggle');
    if (toggle.style.display === 'block') {
        toggle.style.display = 'none';
        content.innerHTML = 'показать';
    }
    else{
        toggle.style.display = 'block';
        content.innerHTML = 'скрыть';
    }
}

}