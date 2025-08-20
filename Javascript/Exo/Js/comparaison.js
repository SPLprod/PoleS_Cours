let val1 = window.prompt("veuillez entrer votre premier nombre")
val1 = parseFloat(val1)

if (val1) {
    let val2 = window.prompt("veuillez entrer votre second nombre")
    val2 = parseFloat(val2)
    if (val2 && val1 > val2) {
        document.write(`<h2>${val1} est supérieur à ${val2}</h2> <h3>${val1} > ${val2}</h3>`)
    } else if (val2 && val1 < val2) {
        document.write(`<h2>${val1} est inférieur à ${val2}</h2> <h3>${val1} < ${val2}</h3>`)
    } else if (val2 && val1 == val2) {
        document.write(`<h2>${val1} est égal à ${val2}</h2> <h3>${val1} = ${val2}</h3>`)
    } else {
        alert("Veuillez entrer un nombre dans le comparateur")
        location.reload();
    }
} else {
    alert("Veuillez entrer un nombre dans le comparateur")
    location.reload();
}

// ========= /Check uniquement si val1 est true\ =========

// if (val1 != null) {
//     alert(typeof val1)
// }

// ========= /Check si val1 est bel et bien un nombre\ =========

// if (Number.isFinite(val1)) {
//     alert(typeof val1)
// }

// ========= /Check si val1 n'est pas de type number\ =========

// if (isNaN(new Number(val1))) {
//     alert("pas un nombre")
// } else {
//     alert("est un nombre")
// }

// ========= /Check si val1 est de type number\ =========

// if (!isNaN(new Number(val1))) {
//     alert("est un nombre")
// } else {
//     alert("pas un nombre")
// }