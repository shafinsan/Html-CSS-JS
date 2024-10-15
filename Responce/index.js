// Getting Elements From The DOM
const ratingsContainer = document.querySelector(".ratings-container");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");

let selectedRating = "Satisfied";

ratingsContainer.addEventListener("click",(e)=>{
    let rating=e.target.closest(".rating");
    if(rating){
        removeActive();
        rating.classList.add("active");
        selectedRating=rating.querySelector("small").innerHTML;
    }
})

sendBtn.addEventListener("click",()=>{
    panel.innerHTML=`<p class="heart">💖</p>
    <strong>Thank You! </strong>
    <br>
    <strong>Feedback: ${selectedRating} </strong>`
});
function removeActive(){
    document.querySelectorAll(".rating").forEach((value)=>{
        value.classList.remove("active");
    });
}



