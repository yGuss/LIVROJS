const prompt = require("prompt-sync")()
const pessoas = Number(prompt("Nº Pessoas: "))
const peixes = Number(prompt("Nº Peixes: "))
let pagar
if (peixes <= pessoas) {
    pagar = pessoas * 20
}
else {
    pagar = (pessoas * 20) + ((peixes - pessoas) * 12)
}
console.log(`Pagar R$: ${pagar.toFixed(2)}`)