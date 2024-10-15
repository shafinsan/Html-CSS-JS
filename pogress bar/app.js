let nBtn = document.querySelector('.nbtn');
let pBtn = document.querySelector('.pbtn');
let circle = document.querySelectorAll('.circle')
let index = 1;
let progress=document.querySelector('.progress');
if (index == 1) {
    pBtn.disabled = true;
}
nBtn.addEventListener('click', () => {
    index++;
    if (index => circle.length) {
        index = circle.length;
    }
    Uidesign();
})
pBtn.addEventListener('click', () => {
    index--;
    if (index < 1) {
        index = 1;
    }
    Uidesign();
});

function Uidesign() {
    circle.forEach((cir, i) => {
        if (i < index) {
            cir.classList.add('active');
        }
        else {
            cir.classList.remove('active')
        }
    });
    let circle_number=document.querySelectorAll('.active');
    progress.style.width=((circle_number.length-1)/(circle.length-1))*100+"%";
    if (index == circle.length) {
        nBtn.disabled = true;
    }
    else if (index == 1) {
        pBtn.disabled = true;
    }
    else {
        nBtn.disabled = false;
        pBtn.disabled = false;
    }
}