let ac = document.querySelector('button');
let sign = document.querySelector('.sign_in');
let sub = document.querySelector("form");
let reset = document.querySelector('.reset');
let sucess = document.querySelector('.success');
let input = document.querySelectorAll('.pass');
let eye = document.querySelectorAll('.fa')
let content=document.querySelector('.content');
console.log(input);
console.log(eye);
ac.addEventListener('click', () => {
    content.classList.add('content_active');
    ac.classList.toggle('active');
    sign.classList.add('open');
    setTimeout(() => {
        ac.classList.remove('active');
    }, 100)
})
let Close = document.querySelector('.close');
Close.addEventListener('click', () => {
    sign.classList.remove('open')
    content.classList.remove('content_active');
})

sub.addEventListener('submit', (e) => {
    e.preventDefault();
    sign.classList.remove('open');
    sub.reset();
    sucess.classList.toggle('active_su');
    setTimeout(() => {
        sucess.classList.toggle('active_su');
    }, 1000)
    content.classList.remove('content_active');
})
eye.forEach((ey) => {
    ey.addEventListener('click', () => {
        input.forEach((li) => {
            li.type === 'password' ? li.type = 'text' : li.type = 'password';
        })

    })
})
