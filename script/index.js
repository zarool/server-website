let screenWidth = getWidth();
let screenHeight = getHeight();

window.addEventListener("resize", e => {
    screenWidth = getWidth();
    screenHeight = getHeight();
});

function getWidth() {
    return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    );
}

function getHeight() {
    return Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.documentElement.clientHeight
    );
}


let buttonMenu = document.querySelector(".menu__button");
let optionMenu = document.querySelector(".menu__option");
let buttonClose = document.querySelector(".close");

buttonMenu.addEventListener("click", e => {
    optionMenu.style.width = screenWidth + "px";
})

buttonClose.addEventListener("click", e => {
    closeMenu();
})


function closeMenu() {
    optionMenu.style.width = "0px";
}