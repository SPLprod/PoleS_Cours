/******************************* TABLEAUX *******************************/

// Créer un tableau
/* let tableau = new Array(elements0, elements1, ...);
    let tableau = Array(elements0, elements1, ...);
    let tableau = [elements0, elements1, ...] => manière plus moderne de faire
*/

let tableau = [];
console.log(tableau);

let tab2 = ["Vous", "êtes", "complètement", "atteints", "ajd"]
console.log(tab2);

let position = tab2[2];
console.log(position);

document.write(tab2);

// AJOUTER UN ELEMENT A LA FIN D'UN TABLEAU

let add = tab2.push("Faîtes attention !")

console.log(tab2);

document.write("<ul>");

for (let i = 0; i < tab2.length; ++i) {
	let tab = document.write(`
            <li>La valeur est : ${tab2[i]}</li>
        `);
}

document.write("</ul>");

// AJOUTER UN ÉLÉMENT À LA FIN D'UN TABLEAU
add = tab2.push("Faites attention !");
console.log(tab2);

// for (let i = 0; i < tab2.length; ++i) {
// 	let tab = document.write(`
//             <li>La valeur est : ${tab2[i]}</li>
//         `);
// }

// SUPPRIMER LE DERNIER ELEMENT D'UN TABLEAU

let lastDelete = tab2.pop()
console.log(lastDelete);
console.log(tab2);

// AJOUTER UN ELEMENT AU DEBUT D'UN TABLEAU
tab2.unshift("Me revoilà!");
console.log(tab2);


// SUPPRIMER LE PREMIER ELEMENT D'UN TABLEAU
tab2.shift("Me revoilà!");
console.log(tab2);


/******************************* OBJET *******************************/
let family = {
    father : "Henry",
    mother : "Juliette",
    daughter : {
        son : "Billy"
    }
}

// Boucle FOR IN (objet)
for (let i in family) {
    console.log(family[i]);
    
}

// Boucle FOR OF (tableau)
for (const tab of tab2) {
    console.log(tab);
    
}

// Boucle forEach (tableau)
tab2.forEach(e => {console.log(e);
})

console.log(family);
console.log(family.mother);
console.log(family.daughter.son);

family.daughter.daughter = "Julia";
console.log(family);


let arrayFam = [
    {
        father : "Henry",
        mother : "Juliette",
    },

    {
        father : "Mathieu",
        mother : "Lolita",
        daughter : {
            son : "Marc",
            firstnameDaughter : "Vanessa"
        }
    }
]

console.log(arrayFam);
console.log(arrayFam[1].daughter.firstnameDaughter);
for (let i = 0; i < arrayFam.length; ++i) {
    console.log(arrayFam[i].father)
}

i = 0
while (i<arrayFam.length) {
    console.log(arrayFam[i].father);
    ++i;
}