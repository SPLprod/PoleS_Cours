let agev = window.prompt("Veuillez entrer votre age Please :)");
agev = parseInt(agev);

if (agev === 21) {
    window.open("https://youtu.be/qtVH_oYeA6E", "_blank");
    
} else if (agev >= 18) {
    document.write("<h2>Bienvenue Monsieur Madame 'je suis totalement majeur' (on te voit)</h2>");
} else if (agev < 18) {
    alert("Désolé mais içi on accepte QUE les adultes !");
        // Changer la page en tant que telle
    // window.location.href = "https://fr.wikipedia.org/wiki/Majorit%C3%A9_civile", "_blank";

        // Ouvrir une nouvelle page
    window.open("https://fr.wikipedia.org/wiki/Majorit%C3%A9_civile", "_blank");
} else {
    alert("Désolé mais veuillez entrer votre age PLEASE !");
    location.reload();
}