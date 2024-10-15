let section=document.querySelector('body');
window.addEventListener('keypress',(e)=>{
    section.innerHTML=`
    <section class="container">
      <div class="key">
        <p>Key</p>
        <div class="keyvalue">${e.key==" "?"space" :e.key}</div>
      </div>
      <div class="key">
        <p>Key Code</p>
        <div class="keyvalue">${e.keyCode}</div>
      </div>
      <div class="key">
        <p>Code</p>
        <div class="keyvalue">${e.code}</div>
      </div>
    </section>
    `
})
