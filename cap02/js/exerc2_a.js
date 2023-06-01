const frm = document.querySelector("form")
const resp1 = document.querySelector("#outMedicamento")
const resp2 = document.querySelector("#outPromocao")

frm.addEventListener("submit", (e) => {

    const medicamento = frm.inMed.value
    const preco = Number(frm.inPreco.value)

    const valor = Math.floor(preco * 2)

    resp1.innerText = `Promoção de ${medicamento}`
    resp2.innerText = `Leve 2 por apenas R$: ${valor.toFixed(2)}`

    e.preventDefault()
})



