const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const num = Number(frm.inNumero.value)
    let resposta = ""
    let soma = 1
    for (let i = 2; i <= num; i++) {
        if (num % i == 0 && i != num) {
            resposta = resposta + `,  ${i} `
            soma = soma + i
        }

    }
    respostaFinal = `Divisores do ${num}: 1 ${resposta} (Soma: ${soma})`
    resp1.innerText = respostaFinal
    if (num == soma) {
        resp2.innerText = `${num} É um Número Perfeito`
    }
    else {
        resp2.innerText = `${num} Não é um Número Perfeito`
    }
})