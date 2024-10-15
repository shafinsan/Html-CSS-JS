let input = document.querySelector('input');
let output = document.querySelector('.output');
let btn = document.querySelectorAll('.btn');
input.addEventListener('keyup', () => {
    output.innerHTML = input.value;
})
btn.forEach(b => {
    b.addEventListener('click', () => {
        if (b.classList.contains('uppercase')) {
            output.innerHTML = output.innerHTML.toUpperCase();
        }
        if (b.classList.contains('lowercase')) {
            output.innerHTML = output.innerHTML.toLowerCase();
        }
        if (b.classList.contains('capitalize')) {
            output.innerHTML= output.textContent.split(" ").map((value)=>(
                value.charAt(0).toUpperCase() + value.slice(1)
            )).join(" ");
        }
        if (b.classList.contains('bold')) {
            output.style.fontWeight='900'
        }
        if (b.classList.contains('italic')) {
            output.style.fontStyle='italic';
        }
        if (b.classList.contains('underline')) {
            output.style.textDecoration='underline';
        }
    })
})
