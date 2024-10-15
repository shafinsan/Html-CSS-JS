let ReadMor = document.querySelectorAll(".btn_readMore");
let next = document.querySelectorAll('.btn_back');
let back = document.querySelectorAll('.back');
let card = document.querySelectorAll('.card');
ReadMor.forEach((ReadMore, index) => {
    ReadMore.addEventListener('click', () => {
        card[index].style.transform = `rotateY(180deg)`;
        back[index].style.zIndex = '10';
    })
    next[index].addEventListener('click', () => {
        console.log(1);
        card[index].style.transform = `rotateY(0deg)`;
        back[index].style.zIndex = '0';
    })
})

