let btn = document.querySelector('.navbar-btn');
let navbar = document.querySelector('.navbar');
let navbarLinks = document.querySelectorAll('.navbar-link'); // Select all links
let faPlus = document.querySelector('.fa-plus');

btn.addEventListener('click', () => {
    navbar.classList.toggle('active');
    faPlus.classList.toggle('active');
    navbarLinks.forEach(link => {
        link.classList.toggle('active'); // Toggle 'active' for each link
    });
});
