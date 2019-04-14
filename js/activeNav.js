let mainNavLinks = document.querySelectorAll("nav ul li a");
mainNavLinks = [...mainNavLinks];

const offset = 65;

window.addEventListener("scroll", () => {
  mainNavLinks.forEach(a => {
    let section = document.querySelector(a.hash);
    if (
      section.offsetTop - offset <= window.scrollY &&
      section.offsetTop - offset + section.offsetHeight > window.scrollY
    ) {
      a.classList.add("active");
    } else {
      a.classList.remove("active");
    }
  });
});

mainNavLinks.forEach(navItem => {
  navItem.addEventListener("click", event => {
    event.preventDefault();
    const link = event.currentTarget;
    const section = document.querySelector(link.hash);
    window.scrollTo({ top: section.offsetTop - offset });
  });
});
