function lswitch() {
    if (document.querySelector("img").alt == "on") {
        document.querySelector("body").style.backgroundColor = "rgb(61, 106, 156)";
        document.querySelector("img").src = "img/image.png"
        document.querySelector("img").alt = "off"
        document.querySelector("#switch").innerHTML = "éteindre la lumière"
    } else {
        document.querySelector("body").style.backgroundColor = "rgb(255, 212, 69)"
        document.querySelector("img").src = "img/image1.png"
        document.querySelector("img").alt = "on"
        document.querySelector("#switch").innerHTML = "Allumer la lumière"
    }
}
let btn = document.querySelector("#switch");
btn.addEventListener("click", lswitch)