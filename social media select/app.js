let icon = document.querySelector('.icon');
let container2 = document.querySelector('.container2');
let items = document.querySelectorAll('ul');
let text = document.querySelector('.text');
let highlight = document.querySelector('.high_light')
icon.addEventListener('click', () => {
    icon.classList.toggle('active_icon');
    container2.classList.toggle('active_container');
})
items.forEach((li) => {
    li.addEventListener('click', () => {
        text.innerHTML = `${li.innerText}`
    })
    li.addEventListener('pointerover', function () {
        let w, h, t;
        w = this.offsetWidth;
        h = this.offsetHeight;
        t = this.offsetTop;
        highlight.style.cssText = `transform: translateY(${t}px);
        width: ${w}px;
        height: ${h}px;`
    })
})