let result1 = window.prompt("Veuillez entrer votre Prénom");

let result2 = window.prompt("Veuillez aussi entrer votre Nom");

if (result1 == null || result2 == null) {
    alert ("Répond stp :(");
}
 
else {
    alert(`Donc vous vous appelez ${result1} ${result2}`);
}

// let name;
// let firstname;

// name = prompt("Entrez votre nom : ");
// firstname = prompt("Entrez votre prénom :");

// // Concaténation
// alert("Bonjour, " + firstname + " " + name);

// /* Revient à faire
//    alert(`Bonjour, ${firstname} ${name}`);
// */

// let chiffre = "153.54"
// let chiffre2 = parseInt(chiffre)

// console.log(chiffre2);
