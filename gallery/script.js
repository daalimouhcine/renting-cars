let mobilMenu = () => {
    document.querySelector("nav").classList.toggle("menu-on");
}

// scroll to top script

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}