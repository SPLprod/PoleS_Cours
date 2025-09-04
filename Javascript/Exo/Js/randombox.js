let clickBox = document.querySelector("div")
let box = document.querySelector("div")
let pad = 10
clickBox.addEventListener("click", function () {
    box.style.padding = `${++pad}em`;
});

clickBox.removeEventListener("dblclick", function () {
    alert("double click")
});