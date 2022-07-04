const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');
const home = document.querySelector('.home-content');
const homeImg = document.querySelector('.home-img');
const logo = document.querySelector(".logo");

const date = document.getElementById('date');

console.log(home);

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
    hamburger.classList.toggle("active-btn");
});

// REMOVE HAMBURGER ON LINK CLICK
const navLinks = document.querySelectorAll('.header a');
console.log(navLinks);
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove('active');
        navigation.classList.remove('active');
        logo.classList.remove("active");
        hamburger.classList.remove("active-btn");
    });
})

date.innerHTML = new Date().getFullYear();
