const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const velPerm = Number(frm.inVelPermitida.value)
    const velCond = Number(frm.inVelCondutor.value)
    const velAux = velPerm * 1.2
    if (velCond <= velPerm) {
        resp.innerText = `Situação: Sem Multa`
    }
    else if (velCond < velAux) {
        resp.innerText = `Situação: Multa Leve`
    }
    else {
        resp.innerText = `Situação: Multa Grave`
    }
})