let i = 0;
let gallerie = ["../../../Img/bcg-0.jpg", "../../../Img/bcg-1.jpg", "../../../Img/bcg-2.jpg", "../../../Img/bcg-3.jpg", "../../../Img/bcg-4.jpg", "../../../Img/bcg-5.jpg"]

function carrou(select) {
    if (select == 'prev') {
        --i;
        loop();
    }

    if (select == 'next') {
        ++i;
        loop();
    }
}

function loop() {
    if (i < 0) {
        i = gallerie.length - 1
    } else if (i > gallerie.length - 1) {
        i = 0
    }
    console.log(i);
    document.querySelector(".images").style.background = `url('${gallerie[i]}') center/cover no-repeat`;
}

function rndm() {
    i = Math.floor(Math.random() * gallerie.length)
    document.querySelector(".images").style.background = `url('${gallerie[i]}') center/cover no-repeat`;
    console.log(i);
}