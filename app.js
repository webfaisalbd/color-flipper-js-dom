let button= document.querySelector(".button");
let container= document.querySelector(".container");
let text= document.querySelector(".text");

button.addEventListener('click',function(){

    let backgroundColor=rgbCalculation();
    container.parentNode.style.backgroundColor=backgroundColor;

    text.textContent=backgroundColor;
})

function rgbCalculation(){
    let r=Math.floor((Math.random()*255));
    let g=Math.floor(parseInt(Math.random()*255));
    let b=Math.floor(parseInt(Math.random()*255));

    return `rgb(${r},${g},${b})`
}