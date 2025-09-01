let shopping = [];
let i = 0;
while (true) {
    liste = window.prompt("Veuillez entrer un élément à la liste de course");
    shopping.push(liste);

    yesno = window.prompt("Voulez-vous continuer ? (oui/non)");
    if (yesno == "non") {
        document.querySelector("#list").textContent = ` ${shopping}`;
        break;
    } else if (yesno == "oui") {
        
    } else {
        
    }
}