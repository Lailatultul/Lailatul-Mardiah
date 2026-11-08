
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function() {
    navMenu.classList.toggle("open");

    if (navMenu.classList.contains("open")) {
        menuToggle.innerHTML = "✕";
    } else {
        menuToggle.innerHTML = "☰";
    }
});

// Menutup menu setelah diklik
const menuLinks = document.querySelectorAll("nav a");

menuLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        navMenu.classList.remove("open");
        menuToggle.innerHTML = "☰";
    });
});
