const inRadios = document.querySelectorAll("input")
const imClub = document.querySelector("#imgClube")
const dvTitulo = document.querySelector("#divTitulo")

const trocarClube = () => {
    const clubes = ["Brasil", "Pelotas", "Farroupilha"]

    let selecao

    for (let i = 0; i < inRadios.length; i++) {
        if (inRadios[i].checked) {
            selecao = i
            break
        }
    }

    if (selecao <= 2) {
        dvTitulo.className = `row cores-${clubes[selecao]}`
        imClub.src = `img/${clubes[selecao].toLowerCase()}.png`
        imClub.className = "img-fluid"
        imClub.alt = `Símbolo do ${clubes[selecao]}`
        localStorage.setItem("clube", clubes[selecao])
    } else {
        dvTitulo.className = "row"
        imClub.className = "d-none"
        imClub.alt = ""
        localStorage.removeItem("clube")
    }
}

for (const inRadio of inRadios) {
    inRadio.addEventListener("change", trocarClube)
}

const verificarClube = () => {
    if (localStorage.getItem("clube")) {
        const clube = localStorage.getItem("clube")

        if (clube == "Brasil") {
            inRadios[0].checked = true
        } else if (clube == "Pelotas") {
            inRadios[1].checked = true
        } else {
            inRadios[2].checked = true
        }
        trocarClube()
    }
}
window.addEventListener("load", verificarClube)