let span = document.querySelectorAll('span');
let description = document.querySelectorAll('.description');
let ss = document.querySelectorAll('.starting_span');

span.forEach(li=>{
    li.addEventListener('click',(e)=>{
        let ss_current_active=document.querySelector('.starting_span.active');
        let current_active_next_element=document.querySelector('.description.active');
        if((ss_current_active && current_active_next_element)){
            ss_current_active.classList.toggle('active');
            current_active_next_element.classList.toggle('active');
        }
        let li_ss_p=e.target.parentElement.closest('.starting_span');
        let next_element=e.target.parentElement.nextElementSibling.closest('.description');
        if((ss_current_active!=li_ss_p)){
            li_ss_p.classList.toggle('active');
            next_element.classList.toggle('active');
        }
        
    })
})

