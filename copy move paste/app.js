let cpyBtn=document.querySelector('#CopyBtn');
let mBtn=document.querySelector('#MoveBtn');
let cpyText=document.querySelector("textarea[name='copyText']");
let mText=document.querySelector("textarea[name='moveText']");
let output=document.querySelector('.output');
cpyBtn.addEventListener('click',()=>{
    output.textContent="Copy Sucessfull";
    output.classList.toggle('active');
    setTimeout(()=>{
        output.classList.toggle('active');
    },2000);
    let temp=cpyText.value;
    copy_function(temp);
    cpyText.value="";
})
mBtn.addEventListener('click',()=>{
    let temp=cpyText.value;
    mText.value=temp;
    output.textContent="Move Sucessfull";
    output.classList.toggle('active');
    setTimeout(()=>{
        output.classList.toggle('active');
    },2000);
})
function copy_function(str){
    let textarea=document.createElement('textarea');
    textarea.value=str;
    document.querySelector('body').appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.querySelector('body').removeChild(textarea);
}
output.textContent="";