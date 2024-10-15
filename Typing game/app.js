let area=document.querySelector('.area');
let textarea=document.querySelector('textarea');
let button=document.querySelector('button');
let output=document.querySelector('.output');
const words = [
    "A day in the life of programmer",
    "What is JavaScript?",
    "What is React?",
    "What is Programming Language?",
    "What's your name?",
    "Where are you from?",
    "This is just random word",
    "What is Remix.js?",
    "New Technologies",
    "Is programming hard?",
    "Why do you wanna become a programmer?",
    "Which programming language you like the most?",
    "What is Golang? and why do you wanna learn it?",
    "What is CSS",
];
textarea.disabled=true;
button.addEventListener('click',()=>{
    if(button.innerText==='Start'){
        game.arrText='';
        game.user='';
        game.start=0;
        game.end=0;
        output.innerHTML='';
        play();
        textarea.value="";
        textarea.disabled=false;
    }
    else if(button.innerText==='Done'){
        textarea.disabled=true;
        console.log(2)
        end();
    }
})
let game={
    start:0,
    end:0,
    arrText:"",
    user:"",
}
let index=Math.floor(Math.random()*words.length);
function play(){
    area.textContent=words[index];
    area.style.visibility='visible';
    game.arrText=words[index];
    button.innerHTML='Done';
    let date=new Date();
    game.start=date.getTime();
}
function end(){
    game.user=textarea.value;
    button.innerText='Start';
    area.style.visibility='hidden';
    let date=new Date();
    game.end=date.getTime();
    let result=showResult();
    output.innerHTML=`Time: ${result.ans}s Score: ${result.score} out of: ${(result)? result.len : 0}`;

}
function showResult(){
    let value1=game.arrText.split(' ');
    let value2=game.user.split(' ');
    score=0;
    value1.forEach((val,index)=>{
        if(val==value2[index]){
            score++;
        }
    })
    let ans=(game.end-game.start)/1000;
    return {score,ans,len:value1.length}
}