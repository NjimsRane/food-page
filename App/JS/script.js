const hamburgerMenu =document.querySelector(".hamburgerMenu");
const hamburgerMenuChange =document.querySelector(".hamburgerMenuChange");
const hero =document.querySelector(".hero");

const navBar =document.querySelector(".navBar");

const menuDishes =document.querySelector(".menuDishes");
const dishes =document.querySelector(".dishes");




hamburgerMenu.addEventListener("click",()=>{
    hamburgerMenu.classList.toggle("hamburgerMenuChange");
    hero.classList.toggle("heroChange");
    navBar.classList.toggle("navBarChange");

})
