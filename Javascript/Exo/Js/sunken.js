let win = 0;
let lose = 0;

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
    if (win == 3) {
        document.write(`<h2>BRAVO, tu as gagné !!!</h2><h3>Player : ${win}</h3><h3>Com. : ${lose}</h3>`)
        break;
    } else if (lose == 3) {
        document.write(`<h2>DOMMAGE, tu as perdu...</h2><h3>Player : ${win}</h3><h3>Com. : ${lose}</h3>`)
        break;
    }
}