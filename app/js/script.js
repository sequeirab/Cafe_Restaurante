const menu = document.getElementById('hamburgerMenu');
const slide = document.querySelector("#slide");
const numText = document.querySelector(".hero__numberText");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
let images = [];
let time = 10000;
let i = 0;
let k = i;

menu.addEventListener('click', () => {
    const showMenu = document.querySelector('.menu-block');
    showMenu.classList.toggle('hide');
    
});



// Images

images[0] = './images/slide1.jfif';
images[1] = './images/slide2.png';
images[2] = './images/slide3.png';
images[3] = './images/slide2.png';
images[4] = './images/slide3.png';
images[5] = './images/slide2.png';
images[6] = './images/slide3.png';

//Function to change image

const changeImg = () => {
    


    slide.src = images[i];
    numText.innerHTML = `${i + 1} de ${images.length}`;
   
   console.log("parte de fora");
   i++;


    if (i < images.length) {
        setTimeout(changeImg, time);

    } else {
        i = 0;
        setTimeout(changeImg, time);
    }
    
    
    
}

next.addEventListener("click", () => {
    if(i < images.length){
        slide.src = images[i];
        numText.innerHTML = `${i + 1} de ${images.length}`;
        i++;
    } else {
        i = 0;
    } 

})

prev.addEventListener("click", () => {
    if(i > 0 && i < images.length){
        i--;
        slide.src = images[i];
        numText.innerHTML = `${i + 1} de ${images.length}`;
        
    } else {
        i = images.length;
    } 

})


window.onload = changeImg();