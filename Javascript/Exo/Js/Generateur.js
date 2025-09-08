const quotes = [
    "Le savoir est une arme.",
    "Fais de ta vie un rêve",
    "Le code, c'est de la poésie en logique."
];
// ================== Citation random ==================

let newQuote = document.getElementById("new-quote");
let i = 0;

newQuote.addEventListener("click", () => {
    ++i;
    let rand = Math.floor(Math.random() * quotes.length);
    console.log(quotes[rand]);
    
    document.getElementById("quote").innerText = quotes[rand] + i;
});

// document.getElementById("new-quote").addEventListener("click", () => {
//     let rand = Math.floor(Math.random() * quotes.length);
//     console.log(quotes[rand]);
    
//     document.getElementById("quote").innerText = quotes[rand];
// });

// ================== Couleur random ==================

let changeBg = document.getElementById("change-bg")
function rndm() {
    //Générateur aléatoire HEX
    let hex = "#"
    for (let i=0 ; i<6; ++i){
            let lettornumb = Math.random();
        if (lettornumb >= 0.5){
                //Letter
            let letter = Math.floor(Math.random() * 6);
            if (letter == 0) {
                letter = "a";
            }else if (letter == 1) {
                letter = "b";
            }else if (letter == 2) {
                letter = "c";
            }else if (letter == 3) {
                letter = "d";
            }else if (letter == 4) {
                letter = "e";
            }else if (letter == 5) {
                letter = "f";
            }
            hex += letter;
            console.log(letter);
        } else {
                //Number
            let number = Math.floor(Math.random() * 10);
            number = number.toString();
            hex += number;
            console.log(number);
        }
    }
    console.log(hex);
    return hex;
}

changeBg.addEventListener("click", () => {
    document.querySelector("body").style.backgroundColor = rndm();
});

// ================== Copie citation ==================
let body = document.querySelector("body")
let para = document.createElement("p")

function copyText() {
    let copyQuote = document.getElementById("quote");
    console.log(copyQuote);
    navigator.clipboard.writeText(copyQuote.textContent);

    body.appendChild(para);
    para.textContent = "Le texte à bien été copié";

    setTimeout(() => {
		para.remove();
	}, 5000);
}

// ================== Ajout citation ==================

let addQuote = document.getElementById("add-quote-btn")
let userQuote = document.getElementById("add-quote-input")

addQuote.addEventListener("click", () => {
    console.log(userQuote.value);
    quotes.push(userQuote.value);
    console.log(quotes);

    
});