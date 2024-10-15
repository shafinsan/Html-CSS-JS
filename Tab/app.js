let list = document.querySelectorAll('li');
console.log(list);
list.forEach(li => {
    li.addEventListener('click', (e) => {
        removeAllActive();
        li.classList.add('active');
        e.preventDefault();
        let value = e.target.querySelector('a').getAttribute('href').split('#')[1];
        console.log(value)
        let show = document.querySelector('.show');
        show.classList.remove('show');
        let new_value = document.querySelector(`#${value}`);
        new_value.classList.add('show');
    })
});
document.body.addEventListener('click', (e) => {
    if (e.target === document.body) {
        removeAllActive();
    }
});
function removeAllActive() {
    list.forEach(li => {
        li.classList.remove('active');
    });
}

