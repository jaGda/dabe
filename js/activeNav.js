let mainNavLinks = document.querySelectorAll('nav ul li a');
mainNavLinks = [...mainNavLinks];

window.addEventListener("scroll", () => {
    mainNavLinks.forEach(a => {
        let section = document.querySelector(a.hash);
        if (section.offsetTop - 75 <= window.scrollY && section.offsetTop - 75 + section.offsetHeight > window.scrollY) {
            a.classList.add("active");
        } else {
            a.classList.remove("active");
        }
    });
});