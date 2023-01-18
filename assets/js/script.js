const navLinks = document.querySelectorAll(".nav-link");
const navbar = document.querySelector(".navbar");
const feedLinks = document.querySelectorAll(".feed-name");
let linkActive = document.querySelector(".nav-link.active");

navLinks.forEach(item => {
    item.addEventListener("mouseover", e => {
        if (linkActive != null) {linkActive.classList.remove("active");}
        e.target.classList.add("active");
    });
    item.addEventListener("mouseleave", e => {
        document.querySelector(".nav-link.active").classList.remove("active");
        if (linkActive != null) {linkActive.classList.add("active");}
    });
    item.addEventListener("click", e => {
        e.target.classList.add("active");
        linkActive = e.target;
    });
});

feedLinks.forEach(links => {
   links.onclick = (e) => {
       redirectFeed(e.target.innerHTML);
   }
});

window.onscroll = (e) => {
    if (window.scrollY == 0 && navbar.classList.contains("fixed")) {
        navbar.classList.remove("fixed");
    } else if (!window.scrollY == 0 && !navbar.classList.contains("fixed")) {
        navbar.classList.add("fixed");
    }
}

function redirectFeed(feed) {
    switch (feed) {
        case "GITHUB":
            window.open("https://github.com/AndersonLe17", "_blank").focus();
            break;
        case "LINKEDIN":
            window.open("https://www.linkedin.com/in/andersonle17/", "_blank").focus();
            break;
        case "INSTAGRAM":
            window.open("https://www.instagram.com/anderson_le_17/", "_blank").focus();
            break;
        case "CURRÍCULO":
            window.open("./assets/file/CV_Anderson_Orellana.pdf", "_blank").focus();
            break;
    }
}
