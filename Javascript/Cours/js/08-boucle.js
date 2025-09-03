// FOR "pour..."

// for (3 arguments) {
// Instructions à executer
// }

/*
let i = 0 => initialisation
i < 10 => condition de fin
++i => rajout +1 QUE lorsque la condition est true
*/

for (let i = 0; i < 10; ++i) {
    document.write(`<h1>Nous avons le nomre ${i}</h1>`);
}

for (let x = 0; x <= 10; x += 2) {
    document.write(`<h1>Nous avons le nomre ${x}</h1>`);
}

for (let b = 10; b > 0; --b) {
    document.write(`<h1>Nous avons le nomre ${b}</h1>`);
}

// WHILE "tant que..."

let c = 0;

while (c < 5) {

    if (c == 2) {
        document.write("<h6>Prout ptdr</h6>")
    }
    document.write(`<h1>Nous avons le nomre ${c} avec WHILE</h1>`);
    ++c;
}

// DO... WHILE => fais... tant que... (on execute puis on recommence la loop si la condition est true)

let e = 0;
let f = 5;

do {
    document.write(`<h1>Nous avons la boucle DO WHILE</h1> <p>Mon action se lance ${e} fois</p>`);
    ++e;
} while (e > f);