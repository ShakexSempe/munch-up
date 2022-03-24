const logo = document.querySelector(".logo");
const homeSection = document.getElementById("home");
console.log(home);
const homeOptions = {
    rootMargin: "-75% 0px 0px 0px"
};

const homeObserver = new IntersectionObserver(
    function(entries , homeObserver) {
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                console.log("home NOT intersecting");
                logo.classList.add("active")
            } else {
                logo.classList.remove("active")
                console.log("home IS intersecting")
            }
        });
    }, homeOptions 
);

homeObserver.observe(home);