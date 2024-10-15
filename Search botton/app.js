let mouse = document.querySelector('.mouse');
document.addEventListener('mousemove', function (e) {
    mouse.style.left = `${e.pageX}px`;
    mouse.style.top = `${e.pageY}px`;
})
let p = document.querySelector('p');
let btn = document.querySelector('button');
btn.addEventListener('click', () => {
    let input = document.querySelector('input[type="search"]').value;
    if (input !== "") {
        let regExp = new RegExp(input, 'gi');
        p.innerHTML = p.textContent.replace(regExp, "<mark>$&</mark>")
    }
})

let ch = [];

for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
    ch.push(String.fromCharCode(i));
}
console.log(ch);
random = document.querySelector('.random');
copy = document.querySelector('.copy');
random.addEventListener('click', () => {
    let pass = "";
    for (let i = 0; i < 7; i++) {
        let ran = Math.floor(Math.random() * ch.length);
        pass += ch[ran];
    }
    document.querySelector('input[type="search"]').value=pass;
})
copy.addEventListener('click',()=>{
    let copyText=document.querySelector('input[type="search"]');
    copyText.select();
    document.execCommand('copy');
})