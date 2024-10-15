let cur=document.querySelector('.arrow');
window.addEventListener('scroll',()=>{
    let position=window.scrollY;
    console.log(position)
    if(position<=464){
        cur.classList.toggle('fade_in');
        cur.classList.toggle('fade_out');
    }
})