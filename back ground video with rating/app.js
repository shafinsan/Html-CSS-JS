let container = document.querySelector('.container_of_emoji');
let list = document.querySelectorAll('p');
let button = document.querySelector('button');
let container_of_emoji = document.querySelector('.container_of_emoji');
container.addEventListener('click', (e) => {
    let value = e.target.closest('p');
    if (value) {
        removeActive();
        value.classList.add('active');
    }
})

button.addEventListener('click', () => {
    list.forEach(li => {
        if (li.classList.contains('active')) {
            let value = li.querySelector('span').innerText;
            container_of_emoji.innerHTML = ` <div class="submitContainer active">
            <h1>Thank You</h1>
            <div class="p">You selected:${value}</div>
        </div>`

        }
    })
})


function removeActive() {
    list.forEach(li => {
        li.classList.remove('active');
    })
}