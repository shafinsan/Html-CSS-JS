let n_btn = document.querySelector('.nbtn');
let p_btn = document.querySelector('.pbtn');
let item = document.querySelectorAll('li')
let index = 1;
n_btn.addEventListener('click', () => {
    index++;
    if(index>item.length){
        index=item.length;
    }
    uiDesign();
})
p_btn.addEventListener('click', () => {
    index--;
    if(index<0){
        index=0;
    }
    uiDesign()
})
function uiDesign() {
    item.forEach((li, i) => {
        if (i < index) {
            li.classList.add('active');
            console.log(i);
            console.log("index:",index);
        }
        else{
            li.classList.remove('active');
            console.log(index)
        }
    })
    let circle_length=document.querySelectorAll('li.active').length;
    let lenth=document.querySelector('.slider_container_main ul span');
    lenth.style.width=`${((circle_length-1)/(item.length-1)*100)-1}%`;
    console.log(circle_length)
    if(index===item.length){
        n_btn.disabled = true;
        
    }
    else if(index===0){
        p_btn.disabled = true;
    }
    else{
        n_btn.disabled = false;
        p_btn.disabled = false;
    }
}
