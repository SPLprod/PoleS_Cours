let win = 0;
let lose = 0;

function reset() {
    win = 0;
    lose = 0;
}

function result() {
    if (win>lose) {
        document.querySelector("p").textContent = "Et vous avez...";
        document.querySelector("h2").textContent = "Gagné !!! Félicitation vous avez gagnez contre l'aléatoire!!!";
        document.querySelector("h3").textContent = `Player : ${win} Com. : ${lose}`;
        // document.getElementById("ann1").textContent = "Et vous avez...";
        // document.getElementById("ann2").textContent = "Gagné !!! Félicitation vous avez gagnez contre l'aléatoire!!!";
        // document.getElementById("ann3").textContent = `Player : ${win} Com. : ${lose}`;
    } else {
        document.querySelector("p").textContent = "Et vous avez...";
        document.querySelector("h2").textContent = "Perdu... Mais ne baisse pas les bras!!!";
        document.querySelector("h3").textContent = `Player : ${win} Com. : ${lose}`;
        // document.getElementById("ann1").textContent = "Et vous avez...";
        // document.getElementById("ann2").textContent = "Perdu... Désolé mais ne baisse pas les bras!!!";
        // document.getElementById("ann3").textContent = `Player : ${win} Com. : ${lose}`; 
    }
}

function sunken () {
    // win = 0;
    // lose = 0;

    while (true) {
        let pchoice = window.prompt("Pierre, Feuille ou Ciseaux ? >:)")
        pchoice = pchoice.toLowerCase()
        let rchoice = Math.floor(Math.random() * 3)

        if (pchoice == "pierre"|| pchoice == "feuille" || pchoice == "ciseaux") {
            if (pchoice == "pierre") {
                if (rchoice == 1) {
                    alert("Perdu, +1 pour l'ordinateur");
                    ++ lose; 
                    console.log(`win : ${win}`);
                    console.log(`lose : ${lose}`);               
                } else if (rchoice == 2 ) {
                    alert("Gagné, +1 pour toi");
                    ++ win;
                    console.log(`win : ${win}`);
                    console.log(`lose : ${lose}`);
                } else {
                    alert("égalité");
                }
                
            }
            else if (pchoice == "feuille") {
                if (rchoice == 2) {
                    alert("Perdu, +1 pour l'ordinateur");
                    ++ lose;
                    console.log(`win : ${win}`);
                    console.log(`lose : ${lose}`);
                } else if (rchoice == 0 ) {
                    alert("Gagné, +1 pour toi");
                    ++ win;
                    console.log(`win : ${win}`);
                    console.log(`lose : ${lose}`);
                } else {
                    alert("égalité");
                }
                
            }
            else if (pchoice == "ciseaux") {
                if (rchoice == 0) {
                    alert("Perdu, +1 pour l'ordinateur");
                    ++ lose;
                    console.log(`win : ${win}`);
                    console.log(`lose : ${lose}`);
                } else if (rchoice == 1 ) {
                    alert("Gagné, +1 pour toi");
                    ++ win;
                    console.log(`win : ${win}`);
                    console.log(`lose : ${lose}`);
                } else {
                    alert("égalité");
                }
                
            }
        } else {
            alert("Invalid input")
        }
        if (win == 5) {
            result();
            reset();
            break;
        } else if (lose == 5) {
            result();
            reset();
            break;
        }
    }
}