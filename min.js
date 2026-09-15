
let con=document.querySelector('.con');
let yesBtn=document.querySelector('.yesBtn');
let noBtn=document.querySelector('.noBtn');
let text=document.querySelector('h1');

yesBtn.addEventListener('click',()=>{
    text.innerHTML="I Love You Too ❤️";
})

let noBox=noBtn.getBoundingClientRect();
let conBox=con.getBoundingClientRect();

noBtn.addEventListener('mouseover',()=>{
    let leftValue=Math.floor(Math.random()*(conBox.width-noBox.width))+1;
    let topValue=Math.floor(Math.random()*(conBox.height-noBox.height))+1;
    noBtn.style.left=leftValue+'px';
    noBtn.style.top=topValue+'px';
})