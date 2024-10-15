const API = "https://api.github.com/users/";
let section1 = document.querySelector('.section1');
let repositories = document.querySelector('.repositories');
let input = document.querySelector('input');
let form = document.querySelector('form');
async function fetchData(value) {
    section1.innerHTML = "";
    let responese = await fetch(`${API}${value}`);
    try {
        if (!responese.ok) throw new Error(responese.statusText);
        const {
            avatar_url,
            bio,
            blog,
            company,
            followers,
            following,
            location,
            login,
            twitter_username,
        } = await responese.json();
        let valuee = await fetch(`${API}${value}/subscriptions`);
        let coc = await valuee.json();
        console.log(coc);
        section1.innerHTML = `
        <div class="details">
          <div class="img">
            <img src="${avatar_url}" alt="" />
          </div>
          <div class="user_name">${login}</div>
          <div class="follow">follow</div>
          <div class="bio">${bio}</div>
          <ul></ul>
        </div>
        <div class="followers-info">
          <div class="followers_link">
            <a href="#">
              <i class="fa-solid fa-person"></i>
              <span class="followers">${followers}</span> follower
            </a>
            <a href="#"> <span class="following">${following} </span> following </a>
          </div>

          <div class="icon-container">
            <i class="fa-regular fa-building"></i>
            <a href="#" class="company">${company}</a>
          </div>
          <div class="icon-container">
            <i class="fa-sharp fa-solid fa-location-dot"></i>
            <a href="#" class="location">${location}</a>
          </div>
          <div class="icon-container">
            <i class="fa-regular fa-solid fa-link"></i>
            <a href="#" class="blog">${blog}</a>
          </div>
          <div class="icon-container">
            <i class="fa-brands fa-twitter"></i>
            <a href="#" class="twitter_username">${twitter_username}</a>
          </div>
        </div>
      `;
    } catch (error) {
        console.log(error)
    }
}

async function fetchCard(value) {
    let responese = await fetch(`${API}${value}/subscriptions`);
    try {
        if (!responese.ok) throw new Error(responese.statusText);
        const data = await responese.json();
        console.log(data);
        repositories.innerHTML = "";
        data.forEach(({ name,
            description,
            forks_count,
            language,
            watchers_count,
            git_url }) => {
            let url = git_url.replace(/^git:/, 'http:').replace(/\.git/, '');
            let newElement = document.createElement('div');
            newElement.classList.add('card');
            newElement.innerHTML = `
                <div class="card-header"><a href="${url}">${name}</a></div>
                <div class="card-body">
                  <p>
                    ${description}
                  </p>
                </div>
                <div class="card-footer">
                  <span
                    ><span class="Ruby">${language}</span><i class="star">★ ${watchers_count}</i></span
                  >
                  <span><i class="fork">⎇ ${forks_count}</i></span>
                </div>
                <div class="public">Public</div>
                `
            repositories.appendChild(newElement);
        })
    } catch (error) {
        console.log(error)
    }
}
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let value = input.value;
    if (value) {
        try {
            await fetchData(value);
            await fetchCard(value);

        } catch (error) {

        }
        finally {
            input.value = ""
        }
    }
    input.addEventListener('click', () => {
        location.reload();
    })
})