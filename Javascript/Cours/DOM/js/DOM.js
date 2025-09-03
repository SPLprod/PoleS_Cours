/*
ATTENTION À L'ENDROIT OU ON LINK LE JS
si c'est dans le head il faut attendre que le DOM soit chargé avant de lancer le script js
*/

document.addEventListener("DOMContentLoaded", function() {
    // 1 - SELECTION DES ELEMENTS DANS LE DOM
    let title = document.getElementById("title");
    console.log(title);

    let rice = document.querySelector("ul > li:nth-of-type(3)");
    console.log(rice);

    let li = document.querySelectorAll("li");
    console.log(li);
    console.log(li[2]);

    // 2 - MANIPULATION DU CONTENU HTML & TEXTUEL

    let div = document.querySelector('div');
    console.log(div);

    //Modification du contenu HTML (w/ balise HTML)
    div.innerHTML = "Hey guys!";

    //Modification du contenu HTML (w/o balise HTML)
    div.innerText = "What's up";

    //textContent plus utilisé pour faire des conditions
    if (div.textContent == "Hello") {
        alert("C'est pas ok")
    }
    
    // 3 - MODIFICATION DE STYLES CSS

    function addStyle() {
        // appel de la classe existante dans le CSS
        rice.classList.add("modif");
    }

    addStyle();

    function removeStyle() {
        rice.classList.remove("modif");
    }
    
    removeStyle()

    // 4 - AFFICHER ET MASQUER DES ELEMENTS

    let btn = document.querySelector("button")
    function disappear() {
        if (div.style.display == "none") {
            div.style.display = ""
        } else if (div.style.display == "") {
            div.style.display = "none"
        }
        
    }
    btn.addEventListener("click", disappear)

    // 5 - AJOUTER / SUPPRIMER DES ELEMENTS

        // 01 - Ajout
    let btnadd = document.querySelector("#add")
    
    function addElement() {
        let newEl = document.createElement("p")
        newEl.innerHTML = "C'est comment pour le Parc Astérix ?"
        console.log(newEl);
        let bodyPart = document.querySelector("body")
        bodyPart.appendChild(newEl);
    }

    btnadd.addEventListener("click", addElement)

        // 02 - Suppression
    let btndel = document.querySelector("#delete")

    function delElement() {
        rice.remove();
    }

    btndel.addEventListener("click", delElement)

    function imageSet() {
        let img = document.querySelector("img");
        img.setAttribute("src", "https://tse2.mm.bing.net/th/id/OIP.srTuhAmFgsA-rYgDlFdizAHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3")
        img.setAttribute("alt", "Parc Astérix")

        // img.src = ""
        // img.alt = ""
    }

    imageSet()
})