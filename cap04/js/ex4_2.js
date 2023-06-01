const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    frm.addEventListener("reset", () => {
        resp.innerText = ""
    })
    const nome = frm.inNome.value
    const masculino = frm.inMasculino.checked
    const altura = Number(frm.inAltura.value)

    const peso = masculino ? 22 * Math.pow(altura, 2) : 21 * Math.pow(altura, 2)

    resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)} kg`
})