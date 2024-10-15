let img=document.querySelectorAll('.img');
img.forEach(items=>{
    items.addEventListener('click',()=>{
        removeActive();
        items.classList.add('active');
    })
})
function removeActive(){
    img.forEach(items=>{
        items.classList.remove('active');
    })
}