const frm = document.querySelector("form")
const resp1 = document.querySelector("#outProduto")
const resp2 = document.querySelector("#outPreco")

frm.addEventListener("submit", (e) => {

    const produto = frm.inProduto.value
    const preco = Number(frm.inPreco.value)

    const valorTotal = (preco * 3) - (preco * 0.50)
    const valorPromocao = (preco * 0.50)

    resp1.innerText = `${produto} - Promoção: Leve 3 por R$: ${valorTotal.toFixed(2)}`
    resp2.innerText = `O 3º produto custa apenas R$: ${valorPromocao.toFixed(2)}`

    e.preventDefault()
})