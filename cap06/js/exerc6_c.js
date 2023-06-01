const frm = document.querySelector("form")
const resp = document.querySelector("pre")

const candidatos = []


frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inCandidato.value
    const nota = Number(frm.inNota.value)

    candidatos.push({ nome, nota })
    frm.reset()
    frm.inCandidato.focus()
    frm.btListar.dispatchEvent(new Event("click"))
})

frm.btListar.addEventListener("click", () => {
    if (candidatos.length == 0) {
        alert("Não há candidatos na lista")
        return
    }
    let lista = ""
    for (const candidato of candidatos) {
        lista += candidato.nome + " - " + candidato.nota + " acertos\n"
    }
    resp.innerText = lista
})

frm.btAprovados.addEventListener("click", () => {
    const acertos = Number(prompt("Número de Acertos para Aprovação?"))
    if (acertos == 0 || isNaN(acertos)) {
        alert("Digite um valor válido")
        return
    }
    const copia = candidatos.slice()

    copia.sort((a, b) => { a.nota - b.nota })

    copia.reverse()

    let listaAprovados = ""
    for (const candidato of copia) {
        if (candidato.nota >= acertos) {
            listaAprovados += candidato.nome + " - " + candidato.nota + " acertos\n"
        }
    }

    if (listaAprovados.length == 0) {
        alert("Não há Candidatos Aprovados para a 2º Etapa")
        return
    }
    resp.innerText = listaAprovados
})