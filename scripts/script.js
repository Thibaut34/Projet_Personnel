let listLangage = document.querySelector(".list-langages")
let listFooter = document.querySelector(".footer-elements");

listFooter.addEventListener("mouseenter",
function (event) {
    event.target.style.opacity = 1;
})

listFooter.addEventListener("mouseover",
function (event) {
    event.target.style.opacity = 0.3;

    setTimeout(function() {
        event.target.style.opacity = 1;
    }, 800);
})

listLangage.addEventListener("mouseenter",
function (event) {
    event.target.style.opacity = 1;
})

listLangage.addEventListener("mouseover",
function (event) {
    event.target.style.opacity = 0.3;

    setTimeout(function() {
        event.target.style.opacity = 1;
    }, 800);
})

