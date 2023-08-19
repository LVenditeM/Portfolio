const body = document.querySelector("body");
const darkMode = localStorage.getItem("darkMode");
const linkedin = document.getElementById("linkedin");
const curriculo = document.getElementById("curriculo");
const github = document.getElementById("github");
// const clipboard = document.getElementById("clipboard");
// const mail = document.getElementById("mail");

const theme = document.getElementsByClassName("theme-img")[0];
const menu = document.getElementsByClassName("menu-icon")[0];
const nav = document.getElementById('nav');

function darkmode() {
    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        linkedin.src = "./assets/imgs/light-linkedin.svg";
        github.src = "./assets/imgs/light-github.svg";
        curriculo.src = "./assets/imgs/light-curriculo.svg";
        theme.src = "./assets/imgs/light-theme.svg";
        menu.src = "./assets/imgs/light-menu.svg";
        // clipboard.src = "./assets/imgs/light-clipboard.svg";
        // mail.src = "./assets/imgs/light-mail.svg";
        localStorage.setItem("darkMode", "false"); // Armazena o estado do modo como falso
    } else {
        body.classList.add("dark-mode");
        linkedin.src = "./assets/imgs/dark-linkedin.svg";
        github.src = "./assets/imgs/dark-github.svg";
        curriculo.src = "./assets/imgs/dark-curriculo.svg";
        theme.src = "./assets/imgs/dark-theme.svg";
        menu.src = "./assets/imgs/dark-menu.svg";
        // clipboard.src = "./assets/imgs/dark-clipboard.svg";
        // mail.src = "./assets/imgs/dark-mail.svg";
        localStorage.setItem("darkMode", "true"); // Armazena o estado do modo como verdadeiro
    }
}

function handleScroll() {
    if (window.scrollY > 50) {
        nav.classList.add('scrolling');

    } else {
        nav.classList.remove('scrolling');

    }
}

// Adiciona o evento de scroll à janela
window.addEventListener('scroll', handleScroll);

document.addEventListener("DOMContentLoaded", function () {
    if (darkMode === "true") {
        darkmode()
    }
});


