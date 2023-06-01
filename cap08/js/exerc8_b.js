const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inNome.value

    if (!validarNome(nome)) {
        alert("Informe o nome completo!")
        frm.inNome.focus()
        return
    }

    resp.innerText = "Senha Inicial: " + obterSobrenome(nome) + contarVogais(nome)
})
const validarNome = nome => nome.includes(" ")

const obterSobrenome = sobrenome => {
    const ultEspaco = sobrenome.lastIndexOf(" ")
    return sobrenome.substr(ultEspaco + 1).toLowerCase()
}

const contarVogais = nome => {
    let num = 0
    const vogais = "AEIOU"
    for (const letra of nome) {
        const letraGrande = letra.toUpperCase()
        if (vogais.includes(letraGrande)) {
            num++
        }
    }
    return num < 10 ? "0" + num : num
}

