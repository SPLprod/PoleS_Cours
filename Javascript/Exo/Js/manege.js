let l = window.prompt("Veuillez entrer à quel tour de manège on commence :");
if (isNaN(l)) {
    location.reload()
} else {
    let uinput = window.prompt("Veuillez entrer le nombre de tours désiré :");
    if (isNaN(uinput)) {
    location.reload();
    } else if (uinput < 0) {
        alert("Valeur invalide");
        location.reload();
    } else {
        l = parseInt(l);
        uinput = parseInt(uinput);
        uinput = uinput + l;

        while (l <= uinput) {
            document.write(`<h2>C'est le tour de manège n°${l}</h2>`);
            ++l;
        } 
    }
}

