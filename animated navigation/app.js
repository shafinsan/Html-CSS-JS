let btn=document.querySelector('button');
let Active=document.querySelector('nav');
btn.addEventListener('click',()=>{
    Active.classList.toggle('active');
});