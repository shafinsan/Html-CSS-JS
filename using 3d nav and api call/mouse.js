document.addEventListener('DOMContentLoaded',()=>{
    let mouse=document.querySelector('.mouse');
    document.addEventListener('mousemove',function(e){
        let x=e.pageX;
        let y=e.pageY;
        mouse.style.left=`${x}px`;
        mouse.style.top=`${y}px`;
    })
})

