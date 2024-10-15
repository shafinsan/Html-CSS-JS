let playIcon=document.querySelector('.paly_icon');
let closeBtn=document.querySelector('.closeBtn');
let video=document.querySelector('video');
let imgContainer=document.querySelector('.img_container')
let trailerContainer=document.querySelector('.trailer_Container');
playIcon.addEventListener('click',()=>{
    video.play(0);
    trailerContainer.classList.toggle('active');
})
closeBtn.addEventListener('click',()=>{
    video.pause();
    trailerContainer.classList.toggle('active');

})