const frm = document.querySelector("form")
const respData = document.querySelector("#outData")
const respDesconto = document.querySelector("#outDesconto")


frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const data = frm.inData.value
    const valor = Number(frm.inValor.value)

    const dataLimite = new Date()

    const partes = data.split("-")

    dataLimite.setDate(Number(partes[2]))
    dataLimite.setMonth(Number(partes[1]) - 1)
    dataLimite.setFullYear(Number(partes[0]))

    const dia = dataLimite.getDate()

    dataLimite.setDate(dia + 90)
    const mes = dataLimite.getMonth() + 1
    const ano = dataLimite.getFullYear()

    const valorDesconto = valor - (valor * 0.20)

    respData.innerText = "Data Limite para Pagto com Desconto: " + (dia < 10 ? "0" + dia : dia) + "/" + (mes < 10 ? "0" + mes : mes) + "/" + ano
    respDesconto.innerText = "Valor com Desconto R$: " + valorDesconto.toFixed(2)
})



