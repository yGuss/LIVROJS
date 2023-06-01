const prompt = require ("prompt-sync")()
const salario = Number(prompt("Salário: "))
const tempo = Number(prompt("Tempo em anos: "))
const quadrienios = Math.floor (tempo / 4)
const acrescimo = salario * quadrienios / 100
console.log(`Quadrienios: ${quadrienios}`)
console.log(`Salário Final R$: ${(salario +acrescimo).toFixed(2)}`) 