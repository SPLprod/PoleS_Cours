// SYNTAXE D'UNE CONDITION

if ("l'expression à vérifier") {
    // script à executer
};

let day = "Lundi"

if(day) { //on ne cherche pas encore à savoir si day est égal à Lundi mais si elle existe
    console.log("on a bien day");
    
} else {
    console.log("on n'a pas day");
    
}

let num = 50;

if (num >90) {
    console.log("Bingo!");
    
} else if (day){
    console.log("on a bien day");
    
} else {
    console.log("bahahaha!");
    
}