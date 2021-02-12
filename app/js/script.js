const menu = document.getElementById('hamburgerMenu');
const slide = document.querySelector("#slide");
const numText =document.querySelector(".hero__numberText");
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


//Function to change image

const changeImg = () => {
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