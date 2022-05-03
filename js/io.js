const homeSection = document.getElementById("home");
const homeBtn = document.querySelector(".top-btn");
console.log(homeBtn);
const homeOptions = {
    rootMargin: "-62% 0px 0px 0px"
};

const homeObserver = new IntersectionObserver(
    function(entries , homeObserver) {
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                console.log("home NOT intersecting");
                logo.classList.remove("active");
                homeBtn.classList.add("active-btn");
            } else {
                logo.classList.add("active");
                homeBtn.classList.remove("active-btn");

                console.log("home IS intersecting");
            }
        });
    }, homeOptions 
);

homeObserver.observe(home);