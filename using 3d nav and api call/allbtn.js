let btn = document.querySelector('.nav');
let pageContain = document.querySelector('.page_container');
let nav = document.querySelector('nav');
btn.addEventListener('click',()=>{
    btn.classList.toggle('active');
    pageContain.classList.toggle('active');
    document.querySelector('.form_container').classList.toggle('active');
    nav.classList.toggle('show')
    document.querySelector('.emoji_face').style.zIndex=-100;
    console.log(document.querySelector('.emoji_face').style.zIndex);
    document.querySelector('.emoji_face').style.opacity=0;

    
})
