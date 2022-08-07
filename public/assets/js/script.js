



// Toggle Menu Mobile
let iconMenu = document.querySelector('.header-mobile');
let iconMenuImg = document.querySelector('.header-mobile div img');
let menuArea = document.querySelector('.header-mobile--nav');
let menuItem = document.querySelector('.mobile-item');
iconMenu.addEventListener('click', ()=>{
    if(menuArea.style.width == '80vw'){
        menuArea.style.width = '0vw';
        menuItem.style.display = 'none';
        iconMenuImg.setAttribute('src', 'public/assets/images/mobilehamburguer.png');
    }else {
        menuArea.style.width = '80vw'
        menuItem.style.display = 'flex';
        iconMenuImg.setAttribute('src', 'public/assets/images/mobileclose.png');
    }
});
function closeMenu() {
    menuArea.style.width = '0vw';
    menuItem.style.display = 'none';
    iconMenuImg.setAttribute('src', 'public/assets/images/mobilehamburguer.png');
}
//