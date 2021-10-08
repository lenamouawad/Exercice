let afficher = (something) => {
    document.getElementById("affichage").innerHTML += something
}

let calcul = () => {
    let affiche = document.getElementById("affichage").innerHTML
    console.log(eval(affiche))
    document.getElementById("affichage").innerHTML = eval(affiche)
}