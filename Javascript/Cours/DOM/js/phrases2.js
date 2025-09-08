// TABLEAU DE PHRASES  

const phrases = [
    { id: 0, text: "C'est une belle journée." },
    { id: 1, text: "J'aime apprendre de nouvelles choses." },
    { id: 2, text: "Le café est délicieux." },
    { id: 3, text: "Il fait beau aujourd'hui." },
    { id: 4, text: "Apprendre en groupe c'est fun !" },
];

// BOUCLE POUR AFFICHER CHAQUE PHRASES AVEC BOUTON SUPPRIMER
for (const prhrase of phrases ) {
    let sentence = document.getElementById("sentences-list")
    let newDiv = document.createElement("div")
    sentence.appendChild(newDiv)
    newDiv.setAttribute("id", `${prhrase.id}`)
    newDiv.setAttribute("style", `padding: 1.5em; border : 1px grey solid; margin-bottom: 0.5em;`)
    let newTxt = document.createElement("h2")
    newTxt.innerText = `${prhrase.text}`
    newDiv.appendChild(newTxt)
    let newBut = document.createElement("button")
    newBut.setAttribute("onclick", `delElement(${prhrase.id})`)
    newBut.setAttribute("style", `color: red;`)
    newBut.innerText = `Supprimer`
    newDiv.appendChild(newBut)
}

// FONCTION / FUNCTION SUPPRIMANT LA DIV PARENT AU BOUTON 
function delElement(num) {
    console.log(num);
    let dlt = document.getElementById(`${num}`)
    console.log(dlt);
    dlt.remove()
}