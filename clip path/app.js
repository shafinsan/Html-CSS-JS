let container=document.querySelector('.container');
document.addEventListener('mousemove',(e)=>{
    let x=e.clientX;
    let y=e.clientY;
    container.style.clipPath=` circle(150px at ${x}px ${y}px)`; 
})