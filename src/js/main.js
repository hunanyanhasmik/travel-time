const sectionTitle = document.querySelectorAll(".section__title");

const mode = document.querySelector(".nav__mode");
const toggleIcon = document.querySelector(".toggle-icon");
const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun");


mode.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    sectionTitle.forEach(item => {
        item.classList.toggle("dark");
    })

    toggleIcon.classList.toggle("dark");

    if (toggleIcon.classList.contains("dark")) {
        sun.style.display = "none";
        moon.style.display = "block";
    } else {
        sun.style.display = "block";
        moon.style.display = "none";
    }
});



const burgerMenu = document.querySelector(".burger__menu");
const dropDown = document.querySelector(".dropDown");



burgerMenu.addEventListener("click", () => {
    dropDown.classList.toggle("active");
    if (dropDown.classList.contains("active")) {
        burgerMenu.classList.add("active");
    } else {
        burgerMenu.classList.remove("active");
    }
});





const discoverMenuItem = document.querySelectorAll(".discover__menu__item");
const tabContentText = document.querySelectorAll(".tab__content .tab__txt");
let bool = true;

discoverMenuItem.forEach((item, i) => {
    item.addEventListener("click", function ()  {
        $("tabContentText[i]").fadeOut()
    })
})
