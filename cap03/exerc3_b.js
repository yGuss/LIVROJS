const prompt = require("prompt-sync")()
const peso = Number(prompt("Peso da ração (kg): "))
const consumo = Number(prompt("Consumo Diário (gr): "))
const pesogr = peso * 1000
const duracao = Math.floor(pesogr / consumo)
const sobra = pesogr % consumo

console.log(`Duração: ${duracao}`)
console.log(`Sobra: ${sobra}`)