const applyStyles = () => {
    const cards = document.querySelectorAll('.container');
    cards.forEach((element, index) => {
        if (window.innerWidth >= 1339) {
            element.style.left = `${index * 35}%`;
            element.style.marginLeft = "40px";
        } else if (window.innerWidth <= 1338 && window.innerWidth >= 900) {
            element.style.left = `${index * 50}%`;
            element.style.marginLeft = "40px";
        }
        else if (window.innerWidth <= 900 && window.innerWidth >= 800) {
            element.style.left = `${index * 100}%`;
            element.style.marginLeft = "30%";
        }
        else if (window.innerWidth <= 800 && window.innerWidth >= 646) {
            element.style.left = `${index * 100}%`;
            element.style.marginLeft = "25%";
        }
        else if (window.innerWidth <= 646 && window.innerWidth >= 551) {
            element.style.left = `${index * 100}%`;
            element.style.marginLeft = "20%";
        }
        else if (window.innerWidth <= 551 && window.innerWidth >= 499) {
            element.style.left = `${index * 100}%`;
            element.style.marginLeft = "15%";
        }
        else if (window.innerWidth <= 499 && window.innerWidth >= 412) {
            element.style.left = `${index * 100}%`;
            element.style.marginLeft = "10%";
        }
        else if (window.innerWidth <= 412 && window.innerWidth >= 380) {
            element.style.left = `${index * 100}%`;
            element.style.marginLeft = "8%";
        }
        else {
            element.style.left = `${index * 100}%`;
            element.style.marginLeft = "0%";
        }
    });
};

let count = 0
const slide_image = () => {
    const cards = document.querySelectorAll('.container');
    cards.forEach(card => {
        card.style.transform = `translateX(-${count * 200}%)`
    })
}

const next = document.querySelector(".next");
next.addEventListener('click', () => {
    const cards = document.querySelectorAll('.container').length;
    count++;
    slide_image()


})
const previous = document.querySelector(".pre");
previous.addEventListener('click', () => {
    count--;
    slide_image();
})


// Initial styles application on page load
applyStyles();

// Listen for window resize to reapply styles
window.addEventListener('resize', applyStyles);