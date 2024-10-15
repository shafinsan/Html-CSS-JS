let result = document.querySelector('.result');
let form = document.querySelector('form');
let fa = document.querySelector('.fa');

async function search_Wiki(e) {
    e.preventDefault();
    let input = document.querySelector('input').value;

    async function getValue(input) {
        let encodedQuery = encodeURIComponent(input);
        let x = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch=${encodedQuery}`);
        if (!x.ok) {
            throw new Error("Faild to fetch search results form wikipedia API.");
        }
        let response = await x.json();
        return response;
    }


    if (!input.trim()) {
        result.innerHTML = "<div class='spinner'>... </div>";
        return;
    }

    result.innerHTML = "<div class='spinner'>Loading ... </div>";


    try {
        let { query } = await getValue(input)
        if(query.search.length===0){
            result.innerHTML = "<div class='spinner'>Nothing Found ... </div>";
           return;
        }
        let value_all = query.search;
        result.innerHTML = "";
        value_all.forEach(li => {
            let { pageid, snippet, title } = li;
            const url = `https://en.wikipedia.org/?curid=${pageid}`;
            child = document.createElement('div');
            child.className = "result_container";
            child.innerHTML = `
        <div class="result_container">
        <h1><a class="heading" href="${url}" target="_blank">${title}</a></h1>
        <p class="p"><a class="para" href="${url}" target="">${url}</a></p>
        <div class="details">
          ${snippet}
        </div>
        </div>`
            result.appendChild(child);
        })
    } catch (error) {
        console.error(error);
        result.innerHTML = "";
        child = document.createElement('div');
        child.className = "result_container";
        child.innerHTML = `
        <div class="result_container">
        <h1><a class="heading" href="" target="_blank">Sorry</a></h1>
        <p class="p"><a class="para" href="" target="">😢😢😢</a></p>
        <div class="details">
        </div>
        </div>`
        result.appendChild(child);

    }
}

form.addEventListener('submit', search_Wiki);
fa.addEventListener('click', search_Wiki);
let btn1 = document.querySelector('.btn1');
btn1.addEventListener('click', () => {
    if (!btn1.classList.contains('active')) {
        btn1.innerHTML = "Light";
        btn1.classList.toggle('active');
        document.querySelector('.contaier').classList.toggle('active');
    }
    else {
        btn1.innerHTML = "Dark";
        btn1.classList.toggle('active');
        document.querySelector('.contaier').classList.toggle('active');
    }


})
