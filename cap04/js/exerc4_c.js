const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const valor = Number(frm.inValor.value)

    if (valor < 1.00) {
        resp1.innerText = `Valor Insuficiente.. (O valor mínimo é R$: 1.00)`
        return
    }

    if (valor >= 3) {
        tempo = 120
        troco = valor - 3.00
    }
    else if (valor >= 1.75) {
        tempo = 60
        troco = valor - 1.75
    }
    else {
        tempo = 30
        troco = valor - 1.00
    }

    resp1.innerText = `Tempo: ${tempo}`
    if (troco > 0) {
        resp2.innerText = `Troco R$: ${troco}`
    }
}
)