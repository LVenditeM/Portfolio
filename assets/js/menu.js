document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("nav");
    const menuOverlay = document.getElementById("menu-overlay");
    const body = document.body;

    menuToggle.addEventListener("click", function () {
        menuOverlay.classList.toggle("active");
        nav.classList.toggle("scrolling");
    });

    // Fecha o menu quando o usuário clica fora dele
    body.addEventListener("click", function (event) {
        if (!menuOverlay.contains(event.target) && !menuToggle.contains(event.target)) {
            menuOverlay.classList.remove("active");
            nav.classList.remove("scrolling");
        }
    });
});
