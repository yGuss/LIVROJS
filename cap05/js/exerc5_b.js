const frm = document.querySelector("form")
const resp = document.querySelector("#outResp")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const chinc = Number(frm.inChinchilas.value)
    const anos = Number(frm.inAnos.value)
    let resposta = ""
    let total = chinc
    for (i = 1; i <= anos; i++) {
        resposta = resposta + `${i}º Ano: ${total} Chinchilas \n`
        total = total * 3
    }

    resp.innerText = resposta
})

