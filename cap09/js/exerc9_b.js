const frm = document.querySelector("form")
const resp = document.querySelector("pre")


frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const produto = frm.inProduto.value

    if (localStorage.getItem("comprasProduto")) {

        const produtos = localStorage.getItem("comprasProduto").split(";")
        produtos.push(produto)

        produtos.sort()

        localStorage.setItem("comprasProduto", produtos.join(";"))
    } else {
        localStorage.setItem("comprasProduto", produto)
    }

    listarProdutos()

    frm.reset()
    frm.inProduto.focus()
})


const listarProdutos = () => {
    if (!localStorage.getItem("comprasProduto")) {
        resp.innerText = ""
        return
    }

    const produtos = localStorage.getItem("comprasProduto").split(";")

    resp.innerText = `Protudos Adicionados\n----------------------\n${produtos.join("\n")}`
}

window.addEventListener("load", listarProdutos)

frm.btLimpar.addEventListener("click", () => {
    if (localStorage.getItem("comprasProduto")) {
        if (confirm("Deseja realmente excluir todos os itens da lista?")) {
            localStorage.removeItem("comprasProduto")
            listarProdutos()
        }
    } else {
        alert("A lista está vazia...")
    }
    frm.inProduto.focus()
})
