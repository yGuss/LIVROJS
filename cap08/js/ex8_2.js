const frm = document.querySelector("form")
const respClassificacao = document.querySelector("#outClassificacao")
const respEntrada = document.querySelector("#outEntrada")
const respParcelas = document.querySelector("#outParcelas")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const modelo = frm.inModelo.value
    const ano = Number(frm.inAno.value)
    const preco = Number(frm.inPreco.value)

    const classificacao = classificarVeiculo(ano)
    const entrada = calcularEntrada(preco, classificacao)

    const parcela = (preco - entrada) / 10

    respClassificacao.innerText = modelo + " - " + classificacao
    respEntrada.innerText = `Entrada R$: ${entrada.toFixed(2)}`
    respParcelas.innerText = `+10x de R$: ${parcela.toFixed(2)}`
})

const classificarVeiculo = (ano) => {
    const anoAtual = new Date().getFullYear()
    let classif
    if (ano == anoAtual) {
        classif = "Novo"
    } else if (ano == anoAtual - 1 || ano == anoAtual - 2) {
        classif = "Seminovo"
    } else {
        classif = "Usado"
    }
    return classif
}

const calcularEntrada = (valor, status) =>
    status == "Novo" ? valor * 0.5 : valor * 0.3

