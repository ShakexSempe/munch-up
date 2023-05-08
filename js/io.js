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