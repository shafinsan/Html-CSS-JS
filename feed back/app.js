let btn = document.querySelector('button');
let list = document.querySelectorAll('.emoji_container');
let emoji = document.querySelectorAll('.emoji');
let body = document.querySelector('body');
let container = document.querySelector('.container')
let myEmoji, my_value;
list.forEach(li => {
    li.addEventListener('click', (e) => {
        e.stopImmediatePropagation();
        removeAllActive();
        let value = li.querySelector('.emoji')
        myEmoji = value.textContent;
        value.classList.add('active')
        my_value = li.querySelector('p').textContent;
    })
});
body.addEventListener('click', (e) => {
    if (e.target.closest('body')) {
        removeAllActive();
    }
})
function removeAllActive() {
    emoji.forEach(li => {
        li.classList.remove('active');
    });
}
btn.addEventListener('click', () => {
    container.innerHTML = `
    <div class="newContainer">
    <h1>Thank You💖</h1>
    <div class="bottom_container">
      <p>you selected: <span>${myEmoji}</span></p>
      <p>you feel: <span>${my_value}</span></p>
    </div>
  </div>
    `
    btn.style.display="none";
})
