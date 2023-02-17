let scrollIcon = document.querySelector(".scroll-top");

window.onscroll = function () {
    scrollY >= 200 ? scrollIcon.classList.add("show") : scrollIcon.classList.remove("show");
}

scrollIcon.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior:"smooth"
    })
}