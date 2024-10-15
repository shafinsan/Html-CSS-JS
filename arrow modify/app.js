let arrow = document.querySelector('.arow');

document.addEventListener('scroll', () => {
    let { top } = arrow.getBoundingClientRect();
    if (top <= 578) {
        if (!arrow.classList.contains('hidden')) {
            if(arrow.classList.contains('show')){
                arrow.classList.remove('show');
            }
            arrow.classList.add('hidden');
            console.log(1);
        }
    }
    else{
        if (arrow.classList.contains('hidden') && !arrow.classList.contains('show')) {
            arrow.classList.remove('hidden')
            arrow.classList.add('show');
            console.log(2);
        }
    }
})