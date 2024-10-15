let pass = document.querySelector('.password');
let bg = document.querySelector('.background_img');
pass.addEventListener('input', (e) => {
    let input = e.target.value;
    let len = input.length;
    let bur = (20 - len * 2);
    bg.style.filter = `blur(${bur}px)`;
})