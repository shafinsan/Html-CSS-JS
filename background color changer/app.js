let btn = document.querySelector('#switch');
let body = document.querySelector('body');
btn.addEventListener('click', () => {
    btn.checked ? body.style.backgroundColor = "white" : body.style.backgroundColor = "black";
})