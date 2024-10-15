let nav = document.querySelector('nav');
let btn = document.querySelector('.span_conatainer');
let sp = document.querySelectorAll('.span_conatainer span')

btn.addEventListener('click', () => {
    if (btn.dataset.open == 'close') {
        nav.style.clipPath = "circle(150% at calc(100% - 2.09rem) 1.74rem)";
        btn.dataset.open = 'open';
        btn.style.backgroundColor = "bisque"
        btn.style.border = "2px"
        sp.forEach((spa) => {
            spa.style.border = "2px solid black";
        })
    }
    else {
        btn.style.backgroundColor = ""
        sp.forEach((spa) => {
            spa.style.border = "";
        })
        nav.style.clipPath = "";
        btn.dataset.open = 'close';
    }
})


let list = document.querySelectorAll('nav ul li');
let hightlist = document.querySelector('.highlight');
list.forEach((li) => {
    li.addEventListener('pointerover', function () {
        let w, h, t;
        t = window.offsetTop;
        t_1=window.offsetLeft;
        w = window.offsetWidth;
        h = window.offsetHeight;
        if (window.matchMedia('(min-width: 900px)').matches) {
            
            hightlist.style.cssText = `transform: translateX(${t_1}px);
            width: ${w}px;
            height: ${h}px;
            `
        }
        else {
            hightlist.style.cssText = `transform: translateY(${t}px);
            width: ${w}px;
            height: ${h}px;
            `
            console.log(t, w, h)
        }
    })
})

