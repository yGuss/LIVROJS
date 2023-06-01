const frm = document.querySelector("form")
const RespLado = document.querySelector("#outLados")
const RespTipo = document.querySelector("#outTipo")

frm.addEventListener("submit", (e) => {

    e.preventDefault()

    const ladoA = Number(frm.inLadoA.value)
    const ladoB = Number(frm.inLadoB.value)
    const ladoC = Number(frm.inLadoC.value)

    const ladoAB = ladoA + ladoB
    const ladoAC = ladoA + ladoC
    const ladoBC = ladoB + ladoC

    if (ladoA > ladoBC || ladoB > ladoAC || ladoC > ladoAB) {
        RespLado.innerText = `Lados não podem formar um triângulo`
    }
    else {
        RespLado.innerText = `Lados podem formar um triângulo`
        if (ladoA == ladoB && ladoA == ladoC && ladoB == ladoC) {
            tipo = `Equilátero`
        }
        else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
            tipo = `Isósceles`
        }
        else {
            tipo = `Escaleno`
        }
        RespTipo.innerText = `Tipo: ${tipo}`
    }
})