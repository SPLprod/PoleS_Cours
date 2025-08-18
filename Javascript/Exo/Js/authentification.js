let fname = window.prompt("Veuillez entrer votre Prénom")
fname = fname.toLowerCase()

if (fname == "ludovic" || fname == "sam" || fname == "issa" || fname == "dylan" || fname == "leila" || fname == "johane" ) {
    let age = window.prompt("Veuillez entrer votre Age")
    age = parseInt(age)

    if (fname == "ludovic" && age == 21) {
        document.write("<h2>Mais Bienvenue fais comme chez toi (mais pas trop)</h2>")
    }
    else if (fname == "issa" && age == 20) {
        document.write("<h2>Mais Bienvenue fais comme chez toi (mais pas trop)</h2>")
    }
    else if (fname == "dylan" && age == 27) {
        document.write("<h2>Mais Bienvenue fais comme chez toi (mais pas trop)</h2>")
    }
    else if (fname == "leila" && age == 21) {
        document.write("<h2>Mais Bienvenue fais comme chez toi (mais pas trop)</h2>")
    }
    else if (fname == "johane") {
        document.write("<h2>Mais Bienvenue fais comme chez toi (mais pas trop)</h2>")
    }
    else if (fname == "sam" && age == 28469) {
        document.write("<h2>Bienvenue dans la CIA et rien de mal va arriver :)</h2>")
    }
}

else {
    document.write("<h2>Identifiants incorect : actualisez pour réessayer</h2>")
    // window.close()
}