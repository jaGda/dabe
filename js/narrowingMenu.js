window.addEventListener('scroll', () => {
    if (window.scrollY > 75)
        document.querySelector('nav').classList.add('narrowing');
    else
        document.querySelector('nav').classList.remove('narrowing');
});