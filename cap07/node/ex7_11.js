const prompt = require("prompt-sync")()
const parcelas = Number(prompt("Quantas Parcelas? "))

const data = new Date()

for (let i = 1; i <= parcelas; i++) {
    data.setMonth(data.getMonth() + 1)
    const dia = data.getDate()
    const mes = data.getMonth() + 1
    const ano = data.getFullYear()

    const diaZero = dia < 10 ? "0" + dia : dia
    const mesZero = mes < 10 ? "0" + mes : mes
    console.log(`${i}º Parcela: ${diaZero}/${mesZero}/${ano}`)
}