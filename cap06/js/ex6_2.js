const frm = document.querySelector("form")
const respErros = document.querySelector("#outErros")
const respChances = document.querySelector("#outChances")
const respDica = document.querySelector("#outDica")

const erros = []
const sorteado = Math.floor(Math.random() * 100) + 1
const CHANCES = 6

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const numero = Number(frm.inNumero.value)
    if (numero == sorteado) {
        respDica.innerText = `Parabéns!! Número sorteado: ${sorteado}`
        frm.btSubmit.disabled = true
        frm.btNovo.className = "exibe"
    }
    else {
        if (erros.includes(numero)) {
            alert(`Você já apostou o numero ${numero}. Tente outro...`)
        } else {
            erros.push(numero)
            const numErros = erros.length
            const numChances = CHANCES - numErros
            respErros.innerText = `${numErros} (${erros.join(", ")})`
            respChances.innerText = numChances
            if (numChances == 0) {
                alert("Suas chances acabaram...")
                frm.btSubmit.disabled = true
                frm.btNovo.className = "exibe"
                respDica.innerText = `Game Over!! Número sorteado: ${sorteado}`
            } else {
                const dica = numero < sorteado ? "maior" : "menor"
                respDica.innerText = `Dica: Tente outro número ${dica} que ${numero}`
            }
        }
    }
    frm.inNumero.value = ""
    frm.inNumero.focus()
    frm.btNovo.addEventListener("click", () => {
        location.reload()
    })
})