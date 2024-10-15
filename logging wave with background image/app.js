let text = document.querySelector(".h2");
const words = ["programming", "web", "development", "language", "frontend", "backend", "framework", "JavaScript"];
let index = 0;
let charIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    if (words.length) {
        setTimeout(adding_function, 500);
    }
})
function adding_function() {
    if (charIndex < words[index].length) {
        text.innerHTML += words[index].charAt(charIndex);
        charIndex++;
        setTimeout(adding_function, 200);
    }
    else {
        setTimeout(remove_function, 1000);
    }
}
function remove_function() {
    if (charIndex > 0) {
        text.innerHTML = words[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(remove_function, 200)
    }

    else {
        index++;
        if (index >= words.length) {
            index = 0;
        }
        setTimeout(adding_function, 500);
    }
}


let item=document.querySelectorAll('.media label');
item.forEach(li=>{
    li.innerHTML=li.innerHTML
    .split("")
    .map((value,index)=>
        `<span style="transition-delay:${index*50}ms">${value}</span>`
    ).join("")
})

let btn=document.querySelector('.logging');
let submit_btn=document.querySelector('.submit');
let form_container=document.querySelector('.form_container');
btn.addEventListener('click',()=>{
    form_container.classList.toggle('active');
    btn.style.zIndex="-1";
    btn.style.opacity="0";
})
submit_btn.addEventListener('click',()=>{
    form_container.classList.toggle('active');
    btn.style.zIndex="1";
    btn.style.opacity="1";
})