const header = document.getElementById('header');

let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY < lastScrollY || currentScrollY === 0) {
        header.style.top = '0';
        if (currentScrollY === 0) {
            header.style.backgroundColor = "transparent"
        }
    } else {
        header.style.backgroundColor = "#333333"
        header.style.top = '-100%';
    }

    lastScrollY = currentScrollY;
});