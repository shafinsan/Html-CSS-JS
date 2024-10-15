let container = document.querySelector('.container');
document.addEventListener('DOMContentLoaded',()=>{
    let angle = 0;
    setInterval(()=>{
        angle += 1; 
        container.style.transform = `perspective(1000px) rotateY(${angle}deg)`; 
    }, 100000);
    
})