let container = document.querySelector(".container");
let input = document.querySelector("input");
let output = document.querySelector(".output");
let massage_container = document.querySelector(".massage_container");

function getTodo(value) {
    let todo = document.createElement('div');
    let textEl = document.createElement('span');
    textEl.style.paddingLeft = "1px";
    textEl.innerHTML = value;
    todo.appendChild(textEl);

    massage_container.classList.toggle('sucess');
    massage_container.textContent = "Item add";
    setTimeout(() => {
        massage_container.classList.toggle('sucess');
    }, 2000)


    let closeEl = document.createElement('span');
    closeEl.innerHTML = "&times";
    todo.appendChild(closeEl);
    closeEl.classList.add('delete')

    closeEl.addEventListener('click', () => {
        output.removeChild(todo);
        massage_container.classList.toggle('err');
        massage_container.textContent = "Item deleted";
        setTimeout(() => {
            massage_container.classList.toggle('err');
        }, 3000)
    })

    todo.classList.add('todo');
    return todo;
}

document.querySelector("form").addEventListener('submit', (e) => {
    e.preventDefault();
    let value = input.value;
    if (!value.trim()) {
        return;
    }
    if (!value == "") {
        output.appendChild(getTodo(value));
        input.value = "";
    }
})


