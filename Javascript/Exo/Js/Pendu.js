let guess = [];
let word = "arbre";
let i = 0;
for (const letter of word) {
    console.log(letter);
    guess[i] = `${letter}`
    ++i
}
console.log(guess);

let guesBtn = document.querySelector("button");
guesBtn.addEventListener("click", function () {
    uGuess = window.prompt("Take a guess");
    console.log(uGuess);
})


