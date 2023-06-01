const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero = Number(frm.inNumero.value)
    if (numero % 2 == 0) {
        resp.innerText = `O número ${numero} é Par`
    }
    else {
        resp.innerText = `O número ${numero} é Ímpar`
    }

})