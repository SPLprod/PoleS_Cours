// function txt() {
//     if (arguments[0] == 'pizza') {
//         document.querySelector("#message").textContent = "Mmmmh... La pizza (sans ananas) c'est top !"
//     }
//     if (arguments[0] == 'pates') {
//         pates = document.querySelector("#message").textContent = "Mmmmh... Les Pates c'est top !"
//     }
//     if (arguments[0] == 'cesar') {
//         document.querySelector("#message").textContent = "CESAAAAAAAAAR !!!"
//     }
//     if (arguments[0] == 'japan') {
//         document.querySelector("#message").textContent = "おいしい !!!"
//     }
// }

// function txt(plat) {
//     if (plat == 'pizza') {
//         document.querySelector("#message").textContent = "Mmmmh... La pizza (sans ananas) c'est top !"
//     }
//     else if (plat == 'pates') {
//         pates = document.querySelector("#message").textContent = "Mmmmh... Les Pates c'est top !"
//     }
//     else if (plat == 'cesar') {
//         document.querySelector("#message").textContent = "CESAAAAAAAAAR !!!"
//     }
//     else if (plat == 'japan') {
//         document.querySelector("#message").textContent = "おいしい !!!"
//     }
// }

function txt(plat) {
    switch (plat) {
        case 'pizza' : 
            document.querySelector("#message").textContent = "Mmmmh... La pizza (sans ananas) c'est top !";
            break;
        case 'pates' :
            document.querySelector("#message").textContent = "Mmmmh... Les Pates c'est top !";
            break;
        case 'cesar' : 
            document.querySelector("#message").textContent = "CESAAAAAAAAAR !!!";
            break;
        case 'japan' : 
            document.querySelector("#message").textContent = "おいしい !!!";
            break;
        default : 
            document.querySelector("#message").textContent = "Que dalle";
            break;
    }
}

//========================== SWITCH ==========================

// switch (paramètre) { 
//  case 'élément à évaluer' : }
        // Instruction
        // break; (fin d'execution)
//  default (équivalent else) :
//      Instruction
        // break; (fin d'execution)