const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const atleta = frm.inNome.value
    const idade = Number(frm.inIdade.value)
    const sublinhado = retornarTracos(atleta)
    const categoria = categorizarAluno(idade)

    resp.innerText = atleta + "\n" + sublinhado + "\n" + categoria
})

const retornarTracos = nome => {
    let tracos = ""

    for (const letra in nome) {
        if (letra != " ") {
            tracos += "-"
        } else {
            tracos += " "
        }
    }
    return tracos
}

const categorizarAluno = idade => {
    let cat
    if (idade <= 12) {
        cat = "Infantil"
    } else if (idade <= 18) {
        cat = "Juvenil"
    } else {
        cat = "Adulto"
    }
    return cat
}