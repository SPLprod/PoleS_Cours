//Sélection du formulaire et du champ email

const emailForm = document.getElementById("emailForm");
const emailInput = document.getElementById("email");    
const errorMsg = document.getElementById("error-message");

// Regex => Expression régulière qui permet de valider un certain format de data, içi on veut vérifier qu'on reçoit bien un email
let regex = /@[A-Za-z]+\.[A-Za-z]+/i;

emailForm.addEventListener("submit", function (e) {
    // empêche le rechargement de la page par défaut à la soumission du formulaire
    e.preventDefault(); // OBLIGATOIRE

    const emailVal = emailInput.value;
    console.log(emailVal);

    if(regex.test(emailVal)) {
        alert("email valide et envoyé avec succès !")
        errorMsg.style.display = "none";
    } else {
        errorMsg.innerHTML = "Veuillez entrer un email au format valide SVP"
        errorMsg.style.display = "block";
    }
    
})