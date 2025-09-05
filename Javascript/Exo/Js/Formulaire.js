// MESSAGES
const errorMsg = document.getElementById("errormsg")
const confirmMsg = document.getElementById("confirmmsg")
console.log(errorMsg);
console.log(confirmMsg);

// NOM
const NameForm = document.getElementById("nameForm")
const Name = document.getElementById("name")

NameForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let Nameregex = /[A-Za-z]/i;

    const NameVal = Name.value;
    console.log(NameVal);
    
    if(Nameregex.test(NameVal)) {
        alert("Nom valide et envoyé avec succès !");
    } else {
        alert("Nom invalide !");

    }
} );

// AGE
const AgeForm = document.getElementById("ageForm")
const Age = document.getElementById("age")

AgeForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let ageregex = /[18-99]/i;

    const AgeVal = Age.value;
    console.log(AgeVal);
    
    if(ageregex.test(AgeVal)) {
        alert("Age valide et envoyé avec succès !");
    } else {
        alert("Age invalide !");

    }
} );

// MDP
const MdpForm = document.getElementById("pswrdForm")
const Mdp = document.getElementById("password")

MdpForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let mdpregex = /[A-Z]/g; /[a-z]+[0-9]+[\$!\?%ù£&#-_=\+\*]{8,}/i;

    const MdpVal = Mdp.value;
    console.log(MdpVal);
    

    if(mdpregex.test(MdpVal)) {
        errorMsg.style.display = "none";
        confirmMsg.innerHTML = "Mot de passe valide et envoyé avec succès !"
        confirmMsg.style.display = "block";
    } else {
        confirmMsg.style.display = "none";
        errorMsg.innerHTML = "Mot de passe invalide : veuillez confirmer que votre mot de passe contient au moins 8 caractères dont au moins une majuscule, une minuscule, un chiffre et un caractère spécial ($ ! ? % ù £ & # - _ = + *)";
        errorMsg.style.display = "block";
    }
} );

// ==================== MAËL VER. ====================

/*
// # Valider un formulaire
 
// Nous avons déjà vu comment récupérer des valeurs d'un champs de texte, comment ne pas laisser un champs vide mais comment
// réellement vérifier de manière concrète un formulaire à la soumission ?
 
// Ici il va falloir faire en sorte de créer un formulaire dans le html afin de permettre à l'utilisateur de faire ses informations (nom, âge et mot de passe).
 
// Vous aurez également besoin de 2 div pour gérer les messages d'erreurs. Les messages d'erreurs seront affichés en rouge, le message de formulaire envoyé
// avec succès sera quant à lui en vert.
 
// - Le nom ne doit être en aucun cas laissé vide
// - Il faut limiter l'âge de l'utilisateur (libre choix des limite)
// - Le format du mot de passe devra être vérifié également.
 
function getId(id){
    return document.getElementById(id);
}
 
let form = document.querySelector("#form")
form.addEventListener("submit", function(e){
    e.preventDefault();
    console.log(e);
    let pseudo = getId("pseudo").value;
    let age = getId("age").value;
    let pswd = getId("pswd").value;
    let error = getId("error");
    if(parseInt(age) < 13 || parseInt(age) > 30){
        error.innerText = "Age pas bon mec";
        error.style.display = "block";
        return;
    }
   
    const re = /[A-Z]/; //(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W]).*
    if(!re.test(pswd)){
        error.innerText = "Il manque une maj bro";
        error.style.display = "block";
        return;
    }
    const re1 = /[a-z]/;
    if(!re1.test(pswd)){
        error.innerText = "Il manque une minuscule bro";
        error.style.display = "block";
        return;
    }
    const re2 = /[0-9]/;
    if(!re2.test(pswd)){
        error.innerText = "Il manque un chiffre bro";
        error.style.display = "block";
        return;
    }
    const re3 = /\W/;
    if(!re3.test(pswd)){
        error.innerText = "Il manque un charactère spécial bro";
        error.style.display = "block";
        return;
    }
    error.style.display = "none";
    getId("gg").style.display = "block";
})
*/

// ==================== AHMED VER. ====================

/*
const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;



let succes = document.getElementById('succes')
let error = document.getElementById('error')

const userFrom = document.getElementById('user-sub')
const userName  =  document.getElementById("nom")
const userAge  =  document.getElementById("age")
console.log(typeof userAge);

const userPassword  =  document.getElementById("password")

const showPassword =document.getElementById('showPass')

userFrom.addEventListener('submit', function(e){
    e.preventDefault();
    // console.log(userName.value)
    if (isNaN(userName.value)) {
            succes.style.display = 'block';
        if (userAge.value >= 20 && userAge.value <=40 ) {
            if (regex.test(userPassword.value)) {
                alert('succes')
                succes.style.display = 'block';
                error.style.display = 'none';
                succes.innerText = `succes ;;;; welcome mr/mrs ${userName.value} ; `
                userName.value = ''
                userAge.value = ''
                userPassword.value = ''

            }else{
                alert('"Your password must contain min 8 carac  at least one lowercase letter, one uppercase letter, one digit, and one special character."')
                error.innerText = `Your password must contain min 8 carac at least one lowercase letter, one uppercase letter, one digit, and one special character. `
                succes.style.display = 'none';
                error.style.display = 'block';


            }
        }else{
            alert('age should be between 20-40')
            succes.style.display = 'none';

            error.style.display = 'block';

            error.innerText = `errore ;;;; if your age is between 20-40, please put it , otherwise this site it's not for u `

        }
    }else{
        alert('user name is not ok ')
        succes.style.display = 'none';

        error.style.display = 'block';
        error.innerText = `errore ;;;; you have to put your name `


    }


})




showPassword.addEventListener('click', function(){
      let tog = document.getElementById('password')
        if (tog.type === 'password') {
            tog.type = 'text'
        }else{
            tog.type = 'password'
        }
        
})
*/

// ==================== JOHANE VER. ====================

/*
const form = document.getElementById("form");
 
        form.addEventListener("submit", function (event) {
            event.preventDefault();
 
            // Réinitialisation des messages
            document.getElementById("errorMsg").innerHTML = "";
            document.getElementById("successMsg").innerHTML = "";
 
            // Récupération des valeurs du formulaire
            let nom = document.querySelector("#name").value;
            let age = document.querySelector("#age").value;
            let motDePasse = document.querySelector("#password").value;
 
            // Validation du nom
            if (nom.trim() === "") {
                document.querySelector("#errorMsg").innerHTML =
                    "Le nom ne doit pas être vide.";
                return false;
            }
 
            // Validation de l'âge
            age = parseInt(age); // Convertir la chaîne en nombre entier
            if (isNaN(age) || age < 18 || age > 120) {
                document.querySelector("#errorMsg").innerHTML =
                    "L'âge doit être un nombre entre 18 et 120.";
                return false;
            }
 
            // Validation du mot de passe avec Regex
             * Regex (Expression régulière) :
             * Un Regex est un modèle qui décrit une chaîne de caractères.
             * Il est souvent utilisé pour valider des formats spécifiques comme les adresses email, les numéros de téléphone, ou les mots de passe.
             * Ici, nous utilisons un regex pour vérifier que le mot de passe contient au moins 8 caractères, une majuscule, une minuscule, un chiffre, et un caractère spécial.
             * Pour plus d'informations sur les regex : https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Regular_Expressions

            const motDePasseRegex =
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            if (!motDePasseRegex.test(motDePasse)) {
                document.getElementById("errorMsg").innerHTML =
                    "Le mot de passe doit contenir au moins 8 caractères, avec une majuscule, une minuscule, un chiffre, et un caractère spécial.";
                return false;
            }
 
            // Si tout est valide
            document.getElementById("successMsg").innerHTML =
                "Formulaire validé avec succès !";
            return true;
        });
*/