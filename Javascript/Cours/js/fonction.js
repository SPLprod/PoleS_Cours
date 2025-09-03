// FONCTION PREDEFINIES (NATIVE)

/* indexof()
    cherhe la position d'un élément dans une chaine de caractères (si l'élément n'est pas trouvé, ell renvoit -1)
*/

let sentence = "Bonjour Eddy, comment vas-tu ?";
let pos = sentence.indexOf("Eddy");
document.write(`<h1>indexOf de cette phrase : ${pos}</h1>`)

/* substr()
    découpe une chaine de caractère à partir d'une position donné et récupère un certain nombre de caractère (selon les paramètres (début / fin))
    substring() 
    découpe une chaine de caractère à partir d'une position donné et récupère un certain nombre de caractère jusqu'à la fin établis (selon les paramètres (début / fin))
*/

let cutsentence = sentence.substring(8,12)
let cutsentence1 = sentence.substr(8,4)
document.write(`<h1>substring de cette phrase : ${cutsentence}</h1>`)
document.write(`<h1>substr de cette phrase : ${cutsentence1}</h1>`)

/* includes()
    vérifie si un élément est contenu dans une string
*/

// let email = prompt("Entre ton email là !")
// if (email.includes("@")) {
//     document.write("Email valide")
// } else {
//     document.write("Email INVALIDE RECOMMENCE!!!")
// }

/* lenght()
    retourne la longueur d'une string / tableau
*/

document.write(`Longuer de la variable sentence : ${sentence.length}`);

// FONCTION UTILISATEUR

function myFirstFunction() {
    let email = prompt("Entre ton email là !")
    if (email.includes("@")) {
        document.write("Email valide")
    } else {
        document.write("Email INVALIDE RECOMMENCE!!!")
    }
}

// myFirstFunction()

function askFirstName (firstname) {
    document.write(`<h1>Buongiorno, ${firstname}</h1>`)
}

askFirstName()