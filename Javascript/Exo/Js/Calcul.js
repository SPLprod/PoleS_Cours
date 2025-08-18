let in1 = window.prompt("Veuillez entrer votre premier nombre :")
let in2 = window.prompt("Veuillez entrer votre second nombre à additionner :")

let nub1 = parseFloat(in1)
let nub2 = parseFloat(in2)
let result = nub1 + nub2
document.write(`<h2><u>Résultat</u></h2> <h3>${nub1} + ${nub2} = ${result}</h3> <h3>Le résultat de vos deux nombres additionné est : ${result} !</h3>`)