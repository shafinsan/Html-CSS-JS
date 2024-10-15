let len = document.querySelectorAll('.img').length;
console.log(len)
let up = document.querySelector('.up');
let down = document.querySelector('.down');
let right = document.querySelector('.right_side');
let left = document.querySelector('.left_side');
let height = document.querySelector('.container');
console.log(right)
console.log(left)
height = height.clientHeight;
console.log(height);
left.style.top = `-${(len - 1) * 100}vh`
up.addEventListener('click', () => change('up'));
down.addEventListener('click', () => change('down'));
let increment = 0;
function change(para) {
    if (para === 'up') {
        increment++;
        if (increment > len - 1) {
            increment = 0;
        }
    }
    if (para === 'down') {
        increment--;
        if (increment < 0) {
            increment = len - 1;
        }
    }
    right.style.transform = `translateY(-${increment * height}px)`;
    left.style.transform = `translateY(${increment * height}px)`;
}