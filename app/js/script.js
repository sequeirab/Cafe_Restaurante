const menu = document.getElementById('hamburgerMenu');
const slide = document.querySelector("#slide");
const numText =document.querySelector(".hero__numberText");
const dots = document.querySelector(".hero__dots");
const dot = document.querySelector(".dot");
let elmArr = [];
let images = [];
let time = 5000;
let i = 0;

menu.addEventListener('click', () => {
    const showMenu = document.querySelector('.menu-block');
    showMenu.classList.toggle('hide');
    stop(changeImg);
});



// Images

images[0] = './images/slide1.jfif';
images[1] = './images/slide2.png';
images[2] = './images/slide3.png';
images[3] = './images/slide2.png';
images[4] = './images/slide3.png';
images[5] = './images/slide2.png';
images[6] = './images/slide3.png';

for(let j = 0; j < images.length; j++) {
    const newEl = document.createElement("div");
    newEl.classList.add("dot");
    dots.appendChild(newEl);
    elmArr.push(newEl);
}
//Function to change dots

const changeDots = () => {
    let k = 0;
    if(k = 0){
        elmArr[k].classList.add("active");
    } else if(k > 0) {
        elmArr[k].classList.add("active");
        elmArr[k - 1].classList.remove("active");
    }
    k++;
    console.log("executando", k);
}



//Function to change image

const changeImg = () => {
    changeDots();
    
    slide.src = images[i];
    numText.innerHTML = `${i + 1} of ${images.length}`;
    
    i++;   
    
    
    if(i < images.length) {
        setTimeout(changeImg,  time);
    
    } else {
        i  = 0;
        setTimeout(changeImg,  time);
    }
   
    
}



    window.onload = changeImg();