let shopping = [];
let i = 0;
let e = 0;
while (i == 0) {
    let liste = window.prompt("Veuillez entrer un élément à la liste de course");
    if (liste == false) {
        alert("veuillez entrer un élément")
    } else {
        shopping.push(liste);
        uconfirm()
    }
}

function uconfirm() {
    let yesno = window.prompt("Voulez-vous continuer ? (oui/non)");
        if (yesno == "non") {
            document.querySelector("#list").innerHTML += "<ul id='listul'>"
            while (e < shopping.length) {
                document.querySelector("#listul").innerHTML += `<li> ${shopping[e]} </li>`;
                ++e;
            }
            document.querySelector("#list").innerHTML += "</ul> <button style='padding = 1em' onclick='resetlist()'>Reset</button>"
            ++i;
        } else if (yesno == "oui") {
            
        } else {
            alert("missing / invalid input");
            uconfirm()
        }
}

function resetlist() {
    location.reload()
}