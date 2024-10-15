let btn=document.querySelector('button');
let container2=document.querySelector('.container2');
let container1=document.querySelector('.container1');
btn.addEventListener('click',()=>{
    container1.classList.toggle('container1_active')
    container2.classList.toggle('container2_active')
})