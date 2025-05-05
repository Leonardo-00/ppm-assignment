
window.addEventListener("scroll", function () {
    const header = document.getElementById("siteHeader");
    const navbarLogo = document.querySelector(".nav-logo-button");
    const navHome = document.querySelector(".nav-home-button");
    const navSearch = document.querySelector(".nav-search-button");
    const navbarRight = document.querySelector(".navbar-right");

    if (window.scrollY > header.offsetHeight) {
        navbarRight.classList.remove("d-none");
        navbarLogo.classList.remove("d-none");
        navHome.classList.add("d-none");
        navSearch.classList.add("d-none");
    } else {
        navbarRight.classList.add("d-none");
        navbarLogo.classList.add("d-none");
        navHome.classList.remove("d-none");
        navSearch.classList.remove("d-none");
    }
});