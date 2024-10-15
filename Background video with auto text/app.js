let worlds = ['FUN', 'GOOD', 'POWERFUL', 'NICE', 'ROMANTIC', 'DRAMATIC'];
let span=document.querySelector('span');
let charcter=0;
let index=0;
document.addEventListener('DOMContentLoaded',()=>{
    setTimeout(type,2000);
})
function type(){
    if(charcter<worlds[index].length){
        span.textContent+=worlds[index].charAt(charcter);
        charcter++;
        setTimeout(type,200);
    }
    else{
        setTimeout(earse,200);
    }
}
function earse(){
    if(charcter>0){
        span.textContent=worlds[index].substring(0,charcter-1);
        charcter--;
        setTimeout(earse,500);
    }
    else{
        index++;
        if(index>=worlds.length){
            index=0;
        }
        setTimeout(type,200)
    }
}