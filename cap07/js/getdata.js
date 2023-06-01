const hoje = new Date()
const dia = hoje.getDate()
const mes = hoje.getMonth() + 1
const ano = hoje.getFullYear()
const dia2 = dia.toString().padStart(2, "0")
const mes2 = mes.toString().padStart(2, "0")
console.log(`Data: ${dia}/${mes}/${ano}`)
console.log(`Data: ${dia2}/${mes2}/${ano}`)