let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelector(".aboutme")

window.addEventListener('mousemove', cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}
navLinks.forEach(link => {
    link.addEventListener("mouseover", () => {
        mouseCursor.classList.add("link-hover");
    });
    link.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("link-hover");
    });
})