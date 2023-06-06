const navBtn =  document.querySelector(".nav-icon-btn")
const navIcon = document.querySelector(".nav-icon")
const navList = document.querySelector(".header__top-row")


navBtn.onclick = function (){
    navIcon.classList.toggle("nav-icon--active")
    navList.classList.toggle("header__top-row--mobile")
    document.querySelector("html").classList.toggle("no-scroll")
    document.querySelector("body").classList.toggle("no-scroll")
}

// header__top-row--mobile