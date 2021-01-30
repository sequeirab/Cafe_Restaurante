const menu = document.getElementById('hamburgerMenu');


menu.addEventListener('click', () => {
    const showMenu = document.querySelector('.menu-block');
    console.log('works')
    showMenu.classList.toggle('hide');
})