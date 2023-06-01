// Cria referencia ao form e ao elemento h3 (onde será exibida a resposta)
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

// Cria um "ouvinte" de evento, acionado quando o botao submit for clicado
frm.addEventListener("submit", (e) => {
    const nome = frm.inNome.value //obtem o nome digitado no form
    resp.innerText = `Olá ${nome}` //exibe a respota do programa
    e.preventDefault()
})