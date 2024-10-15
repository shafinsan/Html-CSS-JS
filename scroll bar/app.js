let scrollHeight=document.documentElement.scrollHeight;
let clientHeight=document.documentElement.clientHeight;
let progress=document.querySelector('.progress');
window.addEventListener('scroll',scroll);
function scroll(){
    let scrollTop=document.documentElement.scrollTop;

    console.log(scrollHeight);
    console.log(clientHeight);
    console.log(scrollTop);
  
    
    let value=(scrollTop/(scrollHeight-clientHeight))*100;
    progress.style.width=value+"%"
}