// Mobile Menu

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Navbar Background on Scroll

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.style.background = "#ffffff";
        navbar.style.boxShadow = "0 3px 12px rgba(0,0,0,.15)";
    }else{
        navbar.style.background = "#ffffff";
        navbar.style.boxShadow = "0 3px 10px rgba(0,0,0,.08)";
    }

});
