let fr = document.querySelector('form');
let input = document.querySelector('input');
let search = document.querySelector('.fa ');
let img = document.querySelectorAll('.l1');
let cardImg = document.querySelectorAll('.img');
let food_name = document.querySelectorAll('.food_name');
let description_title = document.querySelectorAll('.description_title');
let ingredient = document.querySelectorAll('.ingredient');
let description = document.querySelectorAll('.description');


let foodFinder = async (e) => {
    e.preventDefault();
    let input = document.querySelector('input');
    let value = input.value;

    let meals = async (value) => {
        let dataFinder = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`);
        let { meals } = await dataFinder.json();
        return meals;
    }
    const showAlert = () => {
        alert("Meal not found :(");
    };
    if (value.trim()) {
        let data = await meals(value);
        console.log(data)
        if (!data) {
            showAlert();
            return;
        }
        let mr = 0;
        let nav_ul = document.querySelector('nav ul');
        nav_ul.innerHTML = "";
        let li_item = 0;
        let x = 0;
        data.forEach((li) => {
            if (x < 3) {
                const { strMeal, strMealThumb, strInstructions } = li;
                if (li_item < 3) {
                    let li_name = document.createElement('li');
                    li_name.innerHTML = strMeal;
                    li_item++;
                    nav_ul.appendChild(li_name);
                }
                ingredient[x].innerHTML = "";
                img[x].style.backgroundImage = `url(${strMealThumb})`;
                cardImg[x].style.backgroundImage = `url(${strMealThumb})`;
                food_name[x].innerHTML = `${strMeal}`;
                description_title[x].innerHTML = `${strMeal}`;
                description[x].innerHTML = `${strInstructions}`;
                for (i = 1; i < 20; i++) {
                    let v = `${li[`strIngredient${i}`]}`
                    if (v) {
                        let ingre = document.createElement('span');
                        ingre.innerHTML = `${li[`strIngredient${i}`]} - ${li[`strMeasure${i}`]}`
                        ingredient[x].appendChild(ingre);
                    }
                }
                x++;
                console.log(x);
            }


        });
        let list = document.querySelectorAll("nav ul li");
        let highlight = document.querySelector(".highlight");

        list.forEach(li => {
            li.addEventListener('mouseover', function () {
                let w = li.offsetWidth;
                let h = li.offsetHeight;
                let left = li.offsetLeft;
                let t = li.offsetTop;
                console.log(w, h, left, t);

                highlight.style.width = w + "px";
                highlight.style.height = h + "px";
                highlight.style.left = left + "px";
                highlight.style.top = t + "px";
            });

            let page = document.querySelectorAll('.l1');
            let overlay = document.querySelector('.overlay1');
            let currentIndex = 0;
            function showIndex(index) {
                if (currentIndex === index) {
                    return;
                }
                overlay.style.animation = `slider 1s linear 1`
                setTimeout(()=>{
                    page[currentIndex].classList.remove('active');
                    page[index].classList.add('active');
                    currentIndex = index;
                },500);
                setTimeout(()=>{
                    overlay.style.animation=null;
                },1000);
                
            }
            let collect = document.querySelectorAll('li')
            collect.forEach((li, index) => {
                li.addEventListener('click', () => {
                    showIndex(index);
                    console.log(1);
                })
            })

        });
    } else {
        alert("Please try searching for meal :)");
    }
}


fr.addEventListener('submit', foodFinder);

search.addEventListener('click', foodFinder);
