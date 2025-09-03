let account = 1000;
let month = 0

// while (account <= 2000) {
//     document.write(`<h3>Vous avez :</h3><h2>${account} €</h2><h3>Vous êtes actuellement au mois n°${month}</h3>`);
//     account += 50;
//     ++ month;
//     if (account == 2050) {
//         document.write(`<h3>YOU DID IT !!!</h3>`);
//     } 
// }

while (account < 10000 && account > 0) {
    document.write(`<h3>Vous avez :</h3><h2 style="color: green;">${account} €</h2><h3>Vous êtes actuellement au mois n°${month}</h3>`);
    let ppower = Math.floor(Math.random() * (1000 + 1)) 
    let apport = 500 - ppower
    account += apport;
    ++ month;
    if (account >= 10000) {
        let year = month / 12
        year = parseInt(year)
        document.write(`<h3>Vous avez :</h3><h2 style="color: green;">${account} €</h2><h3 style="color: blue;">YOU DID IT !!!</h3> <h3>Au bout de ${year} ans</h3>`);
    } else if (account <= 0) {
        document.write(`<h3 style="color: red;">Awww... je suis désolé, better luck next time</h3>`);
    } 
}

// while (true) {
//     document.write(`<h3>Vous avez :</h3><h2>${account} €</h2><h3>Vous êtes actuellement au mois n°${month}</h3>`);
//     let ppower = Math.floor(Math.random() * (100 + 1)) 
//     let apport = 50 - ppower
//     account += apport;
//     ++ month;
//     if (account >= 2050) {
//         document.write(`<h3>YOU DID IT !!!</h3>`);
//         break;
//     } else if (account <= 0) {
//         document.write(`<h3>BAHAHAHA LOSER !!!</h3>`);
//         break;
//     } 
// }