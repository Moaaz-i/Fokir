const header = document.getElementById("header");

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY < lastScrollY || currentScrollY === 0) {
    header.style.top = "0";
    header.style.backgroundColor = "#333333";
    const links = header.getElementsByClassName("links");
    links.style.width = "100%";
    if (currentScrollY === 0) {
      header.style.backgroundColor = "transparent";
    }
  } else {
    header.style.top = "-100%";
  }

  lastScrollY = currentScrollY;
});

const parent_menu_hamburger = document.getElementById("btn");

parent_menu_hamburger.addEventListener("click", () => {
  const hamburger = document.getElementById("hamburger");

  if (hamburger.style.display === "none") {
    hamburger.style.display = "block";
    console.log(hamburger.style.display);
  } else {
    hamburger.style.display = "none";
    console.log(hamburger.style.display);
  }
});
