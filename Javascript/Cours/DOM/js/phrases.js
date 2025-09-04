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
    document.querySelector("#sentences-list").innerHTML += `<div id="${prhrase.id}" style="padding: 1.5em; border : 1px grey solid; margin-bottom: 0.5em;"><h2>${prhrase.text}</h2><button onclick="delElement(${prhrase.id})" type="button" style="color: red;">Supprimer</button></div>`;
}

// FONCTION / FUNCTION SUPPRIMANT LA DIV PARENT AU BOUTON 
function delElement(num) {
    console.log(num);
    let dlt = document.getElementById(`${num}`)
    console.log(dlt);
    dlt.remove()
}