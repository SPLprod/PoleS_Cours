const produits = [
    { product: "Ordinateur", price: 1000, category: "Electronique" },
    { product: "Téléphone", price: 600, category: "Electronique" },
    { product: "T-shirt", price: 20, category: "Vêtements" },
    { product: "Jeans", price: 40, category: "Vêtements" },
    { product: "Pantalon", price: 50, category: "Vêtements" },
];

function itype(rank) {
    toPrint = ""
    for (i=0 ; i<produits.length ; ++i) {
        if (rank == null) {
            toPrint += `<li>${produits[i].product} ${produits[i].price}€ ${produits[i].category}</li>`;
            console.log(toPrint);
            
        } else if (rank == produits[i].category) {
            toPrint += `<li>${produits[i].product} ${produits[i].price}€ ${produits[i].category}</li>`;
            console.log(toPrint);
        } 
    }
    document.querySelector("ul").innerHTML = toPrint;    
}

// function itype(rank) {
//     toPrint = ""
//     for (const prod of produits) {
//         if (rank == null) {
//             toPrint += `<li>${prod.product} ${prod.price}€ ${prod.category}</li>`;
//             console.log(toPrint);
            
//         } else if (rank == prod.category) {
//             toPrint += `<li>${prod.product} ${prod.price}€ ${prod.category}</li>`;
//             console.log(toPrint);
//         } 
//     }
//     document.querySelector("ul").innerHTML = toPrint;    
// }