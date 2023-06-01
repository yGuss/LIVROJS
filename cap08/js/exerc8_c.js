const frm = document.querySelector("form")
const respDesconto = document.querySelector("#outDesconto")
const respValor = document.querySelector("#outValor")


frm.rbSim.addEventListener("click", () => {
    convenio.className = "exibe-linha"
})
frm.rbNao.addEventListener("click", () => {
    convenio.className = "oculta"
})


const calcularDesconto = (valor, taxa) => valor * (taxa / 100)


frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const valor = Number(frm.inValor.value)

    let desconto

    if (frm.rbSim.checked) {
        if (frm.selConvenio.value == "amigo") {
            desconto = calcularDesconto(valor, 20)
        } else {
            desconto = calcularDesconto(valor, 50)
        }
    } else {
        desconto = calcularDesconto(valor, 10)
    }
    respDesconto.innerText = `Desconto R$: ${desconto.toFixed(2)}`
    respValor.innerText = `A Pagar R$: ${(valor - desconto).toFixed(2)}`
})