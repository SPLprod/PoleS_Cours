// function addition() {
//     document.write(`<h1>${arguments[0]} + ${arguments[1]} = ${arguments[0] + arguments[1]}</h1>`);
// }
// addition(parseFloat(prompt("First number")), parseFloat(prompt("Second number")));

function addition(argument1, argument2) {
    document.write(`<h1>${argument1} + ${argument2} = ${argument1 + argument2}</h1>`);
}
addition(5, 2)
addition(parseFloat(prompt("First number")), parseFloat(prompt("Second number")));