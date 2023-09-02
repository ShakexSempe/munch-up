// VARIABLES
const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');
const homeImg = document.querySelector('.home-img');
const logo = document.querySelector(".logo");
const HEADER = document.querySelector(".header");
const navLinks = document.querySelectorAll('.header a');

const date = document.getElementById('date');
const pageLinks = document.querySelectorAll('.page-link');
const activePage = window.location.pathname;

// ACTIVE PAGE LOGIC
pageLinks.forEach(link => {
    if (link.href.includes(`${activePage}`)) {
        link.classList.add('active');
        console.log(`${activePage} is active`)
    }
});

// HAMBURGER TOGGLE LOGIC
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navigation.classList.toggle('active');
    logo.classList.remove("active");
    hamburger.classList.toggle("active-menu");
    HEADER.classList.remove("active-header");
    // REMOVE HAMBURGER ON LINK CLICK
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove('active');
            navigation.classList.remove('active');
            logo.classList.remove("active");
            hamburger.classList.remove("active-menu");
        });
    })

});

// PAGE DATE
date.innerHTML = new Date().getFullYear();


// INTERSECTION OBSERVERS
const home = document.getElementById("home");
const main = document.getElementById("main");
const homeBtn = document.querySelector(".top-btn");
// console.log(HEADER);

// MAIN SECTION OBSERVER
const homeOptions = {
    rootMargin: "-95% 0px 0px 0px"
};

const homeObserver = new IntersectionObserver(
    function(entries , homeObserver) {
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                console.log("home NOT intersecting");
                HEADER.classList.remove("active-header");
            } else {
                HEADER.classList.add("active-header");
                console.log("home IS intersecting");
            }
        });
    }, homeOptions 
);

homeObserver.observe(home);

// MAIN SECTION OBSERVER
const mainOptions = {
    rootMargin: "0% 0px -85% 0px"
};

const mainObserver = new IntersectionObserver(
    function(entries , mainObserver) {
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                console.log("main NOT intersecting");
                HEADER.classList.add("hero-header");
                homeBtn.classList.remove("active-btn");
            } else {
                HEADER.classList.remove("hero-header");
                homeBtn.classList.add("active-btn");
                console.log("main IS intersecting");
            }
        });
    }, mainOptions 
);

mainObserver.observe(main);