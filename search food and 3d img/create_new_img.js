let form = document.querySelector('form');
let fa = document.querySelector('.fa');
let foodFinderApp = async (e) => {
    e.preventDefault();
    let input = document.querySelector('input');
    let getMeals = async (val) => {
        let data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`);
        let { meals } = await data.json();
        return meals;
    }
    let i = 0;
    let img_container = [];

    if (input.value.trim()) {
        let data = await getMeals(input.value);
        if (data) {
            data.forEach(img => {
                let { strMealThumb } = img;
                img_container.push(strMealThumb);
                i++;
            })
            let container = document.querySelector('.container');
            container.innerHTML="";
            for (let j = 0; j < i; j++) {
                let createSpan = document.createElement('span');
                let innerImage = document.createElement('img');
                innerImage.setAttribute('src', img_container[j]);
                createSpan.appendChild(innerImage);
                createSpan.style.setProperty('--i', `${j + 1}`);
                container.appendChild(createSpan);
            }
        }
        else {
            alert('Food Not Found');
        }
    }
    else {
        alert("Please try searching for meal :)");
    }
}
fa.addEventListener('click',foodFinderApp);
form.addEventListener('submit', foodFinderApp);