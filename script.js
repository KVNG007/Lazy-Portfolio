var devWidth = window.innerWidth;
console.log(devWidth)


document.addEventListener("click", e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    
    if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return

    let currentDropdown
    if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle('active')
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove('active')
    })
})

var toTop = document.getElementById("btt");
var about = document.getElementById("about");
var skills = document.getElementById("skills");
var work = document.getElementById("work");
var dms = document.getElementById("dms");

toTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
})

about.addEventListener("click", () => {
    if(devWidth >= 780) {
        window.scrollTo({
            top: 340,
            left: 0,
            behavior: "smooth"
        });
       }
       else if (devWidth <= 480) {
        window.scrollTo({
            top: 320,
            left: 0,
            behavior: "smooth"
        });
       }
       else {
        window.scrollTo({
            top: 600,
            left: 0,
            behavior: "smooth"
        });
       }
});

skills.addEventListener("click", () => {
    if(devWidth >= 780) {
        window.scrollTo({
            top: 620,
            left: 0,
            behavior: "smooth"
        });
       }
       else if (devWidth <= 480) {
        window.scrollTo({
            top: 600,
            left: 0,
            behavior: "smooth"
        });
       }
       else {
        window.scrollTo({
            top: 610,
            left: 0,
            behavior: "smooth"
        });
       }
});

work.addEventListener("click", () => {
    if(devWidth >= 780) {
        window.scrollTo({
            top: 900,
            left: 0,
            behavior: "smooth"
        });
       }
       else if (devWidth <= 480) {
        window.scrollTo({
            top: 1200,
            left: 0,
            behavior: "smooth"
        });
       }
       else {
        window.scrollTo({
            top: 850,
            left: 0,
            behavior: "smooth"
        });
       }
});

dms.addEventListener("click", () => {
    window.scrollTo({
        top: 1500,
        left: 0,
        behavior: "smooth"
    });
})