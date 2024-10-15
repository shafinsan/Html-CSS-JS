let clsBtn=document.querySelector('.nav');
let container=document.querySelector('.container');
clsBtn.addEventListener('click',()=>{
    clsBtn.classList.toggle('active');
    container.classList.toggle('show');
})