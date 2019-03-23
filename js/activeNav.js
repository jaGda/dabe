let mainNavLinks = document.querySelectorAll('nav ul li a');

window.addEventListener("scroll", () => {
    let fromTop = window.scrollY;

    mainNavLinks.forEach(a => {
        let section = document.querySelector(a.hash);
        if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
            a.classList.add("active");
        } else {
            a.classList.remove("active");
        }
    });
});