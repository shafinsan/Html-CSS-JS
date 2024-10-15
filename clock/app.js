
let H=document.querySelector('.hours');
let M=document.querySelector('.min');
let S=document.querySelector('.second');
setInterval(()=>{
    let date=new Date();
    let hours=date.getHours();
    let min=date.getMinutes();
    let second=date.getSeconds();
    let h=(360/12)*hours +(1/2)*min;
    let m=6*min+(1/10)*second;
    let s=6*second;
    H.style. transform=`rotate(${h}deg)`;
    M.style. transform=`rotate(${m}deg)`;
    S.style. transform=`rotate(${s}deg)`;
},1000)