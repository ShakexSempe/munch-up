const homeSection = document.getElementById("home");
const main = document.getElementById("main");
const homeBtn = document.querySelector(".top-btn");
const HEADER = document.getElementById("header");
// console.log(HEADER);
const mainOptions = {
    rootMargin: "-100% 0px 0px 0px"
};

const mainObserver = new IntersectionObserver(
    function(entries , mainObserver) {
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                console.log("main NOT intersecting");
                HEADER.classList.add("active-header");
                homeBtn.classList.remove("active-btn");
            } else {
                HEADER.classList.remove("active-header");
                homeBtn.classList.add("active-btn");
                console.log("main IS intersecting");
            }
        });
    }, mainOptions 
);

mainObserver.observe(main);