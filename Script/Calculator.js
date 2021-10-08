let afficher = (something) => {
    if (something == erase) {
        document.getElementById("affichage").innerHTML = " "
    } else if (something == backspace) {
        document.getElementById("affichage").innerHTML = document.getElementById("affichage").innerHTML.slice(0, document.getElementById("affichage").innerHTML.length - 1)
    } else {
        document.getElementById("affichage").innerHTML += something
    }
}

let calcul = () => {
    let affiche = document.getElementById("affichage").innerHTML
    console.log(eval(affiche))
    document.getElementById("affichage").innerHTML = eval(affiche)
}