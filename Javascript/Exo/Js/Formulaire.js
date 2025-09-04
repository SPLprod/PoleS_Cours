const MdpForm = document.getElementById("pswrdForm")
const Mdp = document.getElementById("password")

let regex = /[A-Za-z]+[0-9]+!/i;

MdpForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const MdpVal = Mdp.value;

    if(regex.test(MdpVal)) {
        alert("email valide et envoyé avec succès !")
    } else {
        alert("Veuillez entrer un email au format valide SVP")
    }
} )