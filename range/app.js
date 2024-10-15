let input=document.querySelector('input');
let sp=document.querySelector('.value span');
document.addEventListener('DOMContentLoaded',()=>{
    sp.innerHTML = input.value;
    input.addEventListener('input', function() {
        sp.innerHTML = input.value;
        let cordinate_value=input.value;
        sp.style.left=cordinate_value+"%";
        sp.style.transform=`translate(-${cordinate_value}%,-50%)`;
        
    });
})