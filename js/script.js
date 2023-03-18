let time = 3000;
let count = 0;
let imgs = document.querySelectorAll(".slider img");
let max = imgs.length;

function nextImage() {
    imgs[count].classList.remove("selected");
    count++;

    if (count >= max) count = 0;
    imgs[count].classList.add("selected");
};

function start() {
    setInterval(() => {
        nextImage()
    }, time)
};

window.addEventListener("load", start);