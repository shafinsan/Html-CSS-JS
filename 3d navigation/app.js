let toggleBtn = document.querySelector('.toggle-btn');
let page_container = document.querySelector('.page-container');
let nav_list = document.querySelector('.nav-list');
let overlay = document.querySelector('.overlay');
toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    page_container.classList.toggle('active');
    nav_list.classList.toggle('show');
})
let pageIndex = 0;
let li = document.querySelectorAll('li');
let page = document.querySelectorAll('.page')
li.forEach((item, index) => {
    item.addEventListener('click', () => {
        showPage(index);
    })
})
function showPage(index) {
    if(pageIndex===index){
        return;
    }
    overlay.style.animation = `slide 1s linear 1`
    setTimeout(() => {
        page[pageIndex].classList.remove('active');
        page[index].classList.add('active');
        pageIndex = index;
    }, 500)
    setTimeout(() => {
        overlay.style.animation = null;
    }, 1000)

}