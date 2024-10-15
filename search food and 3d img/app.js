let container=document.querySelector('.container');
document.addEventListener('DOMContentLoaded',()=>{
    let i=0;
    setInterval(()=>{
        i+=1
        container.style.transform=`rotateY(${i}deg)`;
    },20)
    
})