let cls = document.querySelector('.close');
let input = document.querySelector('input');
let conatainer1 = document.querySelector(".upload");
let conatainer2 = document.querySelector(".img_container");
let img = document.querySelector('.img');
console.log(cls);
console.log(input);
let value = "";
input.addEventListener('change', (e) => {
    value = URL.createObjectURL(e.target.files[0]);
    if (value !== "") {
        document.querySelector('label').addEventListener('click', () => {
            conatainer2.style.zIndex = 100;
            conatainer1.style.zIndex = -100;
            cls.classList.remove('show');
            img.style.backgroundImage = `url(${value})`
            console.log(1)
        })
    }
    cls.addEventListener('click', () => {
        conatainer2.style.zIndex = -100;
        conatainer1.style.zIndex = 100;
        cls.classList.add('show');
        img.style.backgroundImage = `url("")`
        value = "";
        input.value = "";
    })
})
