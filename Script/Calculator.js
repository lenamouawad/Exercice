let afficher = (something) => {
    if (something === "=") {
        document.getElementById("affichage").innerHTML = "" // A changer
    } else {
        document.getElementById("affichage").innerHTML += something
    }
}


/*
let read = require("readline-sync")

let operateur = read.question("Entrer l'operateur")
let operande1 = read.questionInt("Entrer le permier nombre")
let operande2 = read.questionInt("Entrer le second nombre")

function addition(op1, operateur, op2) {
    var result;
    if (operateur == '+') {
        result = op1 + op2;
    } else if (operateur == '-') {
        result = op1 - op2;
    } else if (operateur == '*') {
        result = op1 * op2;
    } else if (operateur == '/') {
        result = op1 / op2;
    }
    console.log(`[ ${op1}, "${operateur}", ${op2}] = ${result}`)

}

addition(operande1, operateur, operande2)*/