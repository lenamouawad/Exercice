let FlowOfSeasons = () => {
    let lastone = document.getElementById(4).src
    for (let i = 4; i > 1; i--) {
        document.getElementById(i).src = document.getElementById(i - 1).src
    }
    document.getElementById(1).src = lastone
}