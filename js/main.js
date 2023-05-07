const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');
// const home = document.querySelector('.home-content');
const homeImg = document.querySelector('.home-img');
const logo = document.querySelector(".logo");
const HEADER = document.querySelector(".header");

const date = document.getElementById('date');
const pageLinks = document.querySelectorAll('.page-link');
console.log(pageLinks);
const activePage = window.location.pathname;
pageLinks.forEach(link => {
    if (link.href.includes(`${activePage}`)) {
        link.classList.add('active');
        console.log(`${activePage} is active`)
    }
});
// document.addEventListener("scroll", () => {
//     let scroll_position = window.scrollY;
//     let scroll_height = window.pageYOffset;

//     if(scroll_position < 20 ) {
//         home.style.opacity = 0;
//         homeImg.style.opacity = 1;
        
//     } else {
//         home.style.opacity = 1;
//         homeImg.style.opacity = 0;
//     }
// });

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navigation.classList.toggle('active');
    logo.classList.remove("active");
    hamburger.classList.toggle("active-menu");
    HEADER.classList.remove("active-header");

});

// REMOVE HAMBURGER ON LINK CLICK
const navLinks = document.querySelectorAll('.header a');
console.log(navLinks);
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove('active');
        navigation.classList.remove('active');
        logo.classList.remove("active");
        hamburger.classList.remove("active-menu");
    });
})

date.innerHTML = new Date().getFullYear();
