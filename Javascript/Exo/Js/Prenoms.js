let prenoms = []
// let turn = 0;

// while (turn < 5) {
//     names = prompt(`Veuillez entrer le prénom n°${turn + 1}`)
//     if (isNaN(names)) {
//         prenoms[turn] = "&nbsp" +names;
//         ++turn;
//     } else {alert("invalid / null input")}
// }

// document.write(`<h2>${prenoms} </h2>`)

for (i=0 ; i<5 ; ++i) {
    names = prompt(`Veuillez entrer le prénom n°${i + 1}`)
    if (isNaN(names)) {
        prenoms[i] = "&nbsp" + names;
    } else {alert("invalid / null input");}
}

if (prenoms.length == 5) {document.write(`<h2>${prenoms} </h2>`)}
else {document.write(`<h2 style="color: red;">!!! &nbsp&nbsp&nbsp&nbsp !!!</h2><h2>Il manque un/des prénom(s)</h2>`)}