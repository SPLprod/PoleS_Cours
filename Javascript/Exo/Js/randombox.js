let clickBox = document.querySelector("div");
let pad = 10;

clickBox.addEventListener('dblclick', function() {
  alert('Element was double-clicked!');
  clickBox.style.padding = `${pad = 10}em`;
});

clickBox.addEventListener("click", function () {
    clickBox.style.padding = `${++pad}em`;
});

function rndm() {
    //Générateur aléatoire HEX
    hex = ""
    for (i=0 ; i<6; ++i){
            lettornumb = Math.random();
        if (lettornumb >= 0.5){
                //Letter
            letter = Math.floor(Math.random() * 6);
            if (letter == 0) {
                letter = "a";
            }else if (letter == 1) {
                letter = "b";
            }else if (letter == 2) {
                letter = "c";
            }else if (letter == 3) {
                letter = "d";
            }else if (letter == 4) {
                letter = "e";
            }else if (letter == 5) {
                letter = "f";
            }
            hex += letter;
            console.log(letter);
        } else {
                //Number
            number = Math.floor(Math.random() * 10);
            number = number.toString();
            hex += number;
            console.log(number);
        }
    }
    console.log(hex);
    document.querySelector("div").style.backgroundColor = `#${hex}`;
}

clickBox.addEventListener('mouseover', rndm);
clickBox.addEventListener('mouseout', () => clickBox.style.backgroundColor = "rgb(0, 174, 255)");

// ============================= Ahmed =============================

// // const events = [
// //   "click", "mouseover", "mouseout", "mousedown", "mouseup", 
// //   "mousemove", "keydown", "keyup", "keypress", "focus", 
// //   "blur", "change", "submit", "resize", "scroll"
// // ];

// let div = document.getElementById("div");
// function generateRandomCode() {
//   let myRandomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);  
//   return myRandomColor;
// }
// div.addEventListener('mouseover', () => div.style.backgroundColor = `${generateRandomCode()}`)
// div.addEventListener('mouseout',  () => div.style.backgroundColor = `skyblue`)
// div.addEventListener('click',     () => div.style.transform = `scale(1.5)`)
// div.addEventListener('dblclick',  () => div.style.transform = `scale(1)`)

// ============================= Johane =============================

// document.addEventListener("DOMContentLoaded", function () {
// 	const colorBox = document.getElementById("color-box");
// 	console.log(Math.floor(Math.random()));
// 	// Fonction pour générer une couleur aléatoire en hexadécimal
// 	function getRandomColor() {
// 		const letters = "0123456789ABCDEF";
// 		let color = "#";
// 		let i;
// 		for (i = 0; i < 6; i++) {
// 			color += letters[Math.floor(Math.random() * 16)];
// 		}
// 		// console.log(letters[i]);
// 		// console.log(letters[Math.floor(Math.random() * 16)]);

// 		return color;
// 	}

// 	getRandomColor();

// 	// Changer la couleur du carré au survol de la souris avec une couleur aléatoire
// 	colorBox.addEventListener("mouseover", function () {
// 		colorBox.style.backgroundColor = getRandomColor(); // Couleur aléatoire
// 	});

// 	// Rétablir la couleur d'origine lorsque la souris quitte le carré
// 	colorBox.addEventListener("mouseout", function () {
// 		colorBox.style.backgroundColor = "#3498db";
// 	});

// 	// Agrandir le carré au clic
// 	colorBox.addEventListener("click", function () {
// 		colorBox.style.width = "20rem";
// 		colorBox.style.height = "20rem";
// 	});

// 	// Réduire le carré à sa taille initiale au double-clic
// 	colorBox.addEventListener("dblclick", function () {
// 		colorBox.style.width = "15rem";
// 		colorBox.style.height = "15rem";
// 	});
// });