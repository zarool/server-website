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
    if (screenWidth <= 800) {
        optionMenu.style.width = "0px";
    }
}



let panel__child = document.querySelectorAll(".panel__child");

function moveChildren(dir) {
    panel__child.forEach(function (elem) {

        let currentChild = window.getComputedStyle(elem);
        let currentTranslate = new WebKitCSSMatrix(currentChild.webkitTransform).m41;
        // console.log(currentTranslate);

        elem.style.transform = "translateX(" + (currentTranslate + dir) + "px)";
    });
}

/// set event on click for each
let disabledTime = 1000;

arrowL = document.querySelectorAll(".left");
arrowR = document.querySelectorAll(".right");

arrowL.forEach(function (elem) {

    elem.addEventListener("click", e => {

        if (!elem.disabled) {
            let panelWidth = document.querySelector(".panel").clientWidth;
            moveChildren(panelWidth);
        }

        arrowL.forEach(function (e) {
            e.disabled = true;
        })

        setTimeout(function () {
            arrowL.forEach(function (e) {
                e.disabled = false;
            })
        }, disabledTime);

    });

});

arrowR.forEach(function (elem) {

    elem.addEventListener("click", e => {

        if (!elem.disabled) {
            let panelWidth = document.querySelector(".panel").clientWidth;
            moveChildren(-panelWidth);
        }

        arrowR.forEach(function (e) {
            e.disabled = true;
        })

        setTimeout(function () {
            arrowR.forEach(function (e) {
                e.disabled = false;
            })
        }, disabledTime);

    });

});