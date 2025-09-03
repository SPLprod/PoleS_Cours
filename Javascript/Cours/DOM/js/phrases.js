const phrases = [
    { id: 0, text: "C'est une belle journée." },
    { id: 1, text: "J'aime apprendre de nouvelles choses." },
    { id: 2, text: "Le café est délicieux." },
    { id: 3, text: "Il fait beau aujourd'hui." },
    { id: 4, text: "Apprendre en groupe c'est fun !" },
];



for (const prhrase of phrases ) {
    document.querySelector("#sentences-list").innerHTML += `<div class="sentence" style="padding: 1.5em; border : 1px grey solid; margin-bottom: 0.5em;"><h2>${prhrase.text}</h2><button class="suppr" id="${prhrase.id}" type="button" style="color: red;">Supprimer</button></div>`;
}
let suppr = document.querySelectorAll(".suppr")
let div =  document.querySelectorAll(`.sentence`)
console.log(suppr);
console.log(div);




function delElement() {
    div = div[suppr[0]]
    div.remove()
    console.log(div);
    
}

suppr.addEventListener("click", delElement)