let light = document.querySelector("img");
let back = document.querySelector("body");
let btn = document.querySelector("#switch");

function lswitch() {
    if (light.alt == "off") {
        light.src = "img/image1.png"
        light.alt = "on"
        btn.innerHTML = "Allumer la lumière"
        back.classList.remove("nuit")
        back.classList.add("jour")
    } else {
        light.src = "img/image.png"
        light.alt = "off"
        btn.innerHTML = "éteindre la lumière"
        back.classList.remove("jour")
        back.classList.add("nuit")
    }
}
btn.addEventListener("click", lswitch)