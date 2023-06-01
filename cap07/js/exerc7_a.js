const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const mensagem = frm.inMensagem.value

    let resposta = ""
    const tam = mensagem.length

    for (let i = 1; i < tam; i = i + 2) {
        resposta += mensagem.charAt(i)
    }
    for (let i = 0; i < tam; i = i + 2) {
        resposta += mensagem.charAt(i)
    }

    resp.innerText = resposta
})
frm.btDescriptografar.addEventListener("click", () => {
    if (!frm.checkValidity()) {
        alert("Informe a mensagem criptografada")
        frm.inMensagem.focus()
        return
    }
    const mensagem = frm.inMensagem.value

    const tam = mensagem.length
    const metade = Math.floor(tam / 2)
    let resposta = ""

    if (tam % 2 == 0) {
        for (let i = metade; i < tam; i++) {
            resposta += mensagem.charAt(i)
            resposta += mensagem.charAt(i - metade)
        }
    } else {
        for (let i = metade; i < tam - 1; i++) {
            resposta += mensagem.charAt(i)
            resposta += mensagem.charAt(i - metade)
        }
        resposta += mensagem.charAt(i)
    }

    resp.innerText = resposta
})