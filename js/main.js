const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");
const links = document.querySelectorAll(".links a");

// Toggle the active class on the container
hamburger_menu.addEventListener("click", () => {
    container.classList.toggle("active");
});

// Close the menu when a link is clicked
links.forEach(link => {
    link.addEventListener("click", () => {
        container.classList.remove("active");
    });
});

// Close the menu when clicking outside of it
document.addEventListener("click", (event) => {
    const isClickInsideMenu = container.contains(event.target);
    const isClickOnHamburger = hamburger_menu.contains(event.target);

    if (!isClickInsideMenu && !isClickOnHamburger) {
        container.classList.remove("active");
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add a class to the navbar when scrolling
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});