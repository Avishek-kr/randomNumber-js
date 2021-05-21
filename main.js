const number = document.querySelector('.number');
const btn= document.querySelector('.btn');

function generateColor(){
    let random = Math.floor(Math.random()*11);
    number.innerHTML=random; 
}

btn.addEventListener('click',generateColor);

