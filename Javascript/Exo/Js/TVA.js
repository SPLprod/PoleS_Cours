let input = window.prompt("Veuillez entrer votre prix dans le convertisseur TTC");
let prix = parseFloat(input);
// let tva = (prix * 20) / 100;
prix *= 1.2
// let total = prix + tva;
document.write(`<h2>Le prix TTC de votre produit est : ${prix}€ !</h2> <h3>(${input}€ à l'origine)</h3>`);