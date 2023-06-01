const frm = document.querySelector("form")
const resp = document.querySelector("pre")

const carros = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const modelo = frm.inModelo.value
    const preco = Number(frm.inPreco.value)
    carros.push({ modelo, preco })
    frm.inModelo.value = ""
    frm.inPreco.value = ""
    inModelo.focus()
    frm.btListar.dispatchEvent(new Event("click"))
})

frm.btListar.addEventListener("click", () => {
    if (carros.length == 0) {
        alert("Não há carros na lista")
        return
    }
    const lista = carros.reduce((acumulador, carro) =>
        acumulador + carro.modelo + " - R$: " + carro.preco.toFixed(2) + "\n", "")
    resp.innerText = `Lista dos Carros Cadastrados \n${"-".repeat(40)}\n${lista}`
})

frm.btFiltrar.addEventListener("click", () => {
    const maximo = Number(prompt("Qual o valor máximo que o cliente deseja pagar?"))
    if (maximo == 0 || isNaN(maximo)) {
        return
    }

    const carrosFilter = carros.filter(carro => carro.preco <= maximo)
    if (carrosFilter.length == 0) {
        alert("Não há carros com o preço inferior ou igual ao solicitado")
        return
    }
    const lista = carrosFilter.reduce((acumulador, carrosFilter) =>
        acumulador + carrosFilter.modelo + " - R$: " + carrosFilter.preco.toFixed(2) + "\n", "")
    resp.innerText = `Carros Até R$: ${maximo.toFixed(2)}\n${"-".repeat(40)}\n${lista}`
})

frm.btSimular.addEventListener("click", () => {
    const desconto = Number(prompt("Qual o percentual de desconto: "))
    if (desconto == 0 || isNaN(desconto)) {
        return
    }
    const carrosDesc = carros.map(aux => ({
        modelo: aux.modelo,
        preco: aux.preco - (aux.preco * desconto / 100)
    }))

    const lista = carrosDesc.reduce((acumulador, carrosDesc) =>
        acumulador + carrosDesc.modelo + " - R$: " + carrosDesc.preco.toFixed(2) + "\n", "")
    resp.innerText = `Carros com desconto: ${desconto}%\n${"-".repeat(40)}\n${lista}`
})