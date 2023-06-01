const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const mensagem = frm.inFrase.value.toUpperCase()
    if (mensagem.indexOf(" ") == -1) {
        alert("Informe, por favor, uma frase")
        frm.inMensagem.focus()
        return
    }

    const mensagem2 = mensagem.replace(/ /g, "")
    const tam = mensagem2.length

    let iguais = true

    for (let i = 0; i < tam / 2; i++) {
        if (mensagem2[i] != mensagem2[tam - 1 - i]) {
            iguais = false
            break
        }
    }

    if (iguais) {
        resp.innerText = `${mensagem} é um Palíndromo`
    } else {
        resp.innerText = `${mensagem} Não é um Palíndromo`
    }
})

