const prompt = require("prompt-sync")()
const { Client } = require('pg');

const produto = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '123456',
    port: 5432,
});

function titulo(texto) {
    console.log("-".repeat(49))
    console.log(texto)
    console.log("-".repeat(49))

}

function cadastrarProduto() {
    titulo("CADASTRAR PRODUTO")
    produto.connect()
    let id = parseInt(prompt("CÓDIGO: "))
    let nome = prompt("NOME: ")
    let preco = parseFloat(prompt("PREÇO: "))
    produto.query('INSERT INTO produto_loja (codigo, nome, preco) VALUES ($1, $2, $3)', [id, nome, preco], (err, res) => {
        if (err) {
            console.log(err ? err.stack : `O produto ${nome} não foi cadastrado`)
        } else {
            console.log(`O produto foi cadastrado - CÓDIGO: ${id} NOME: ${nome} PREÇO: ${preco}`)
        }
        produto.end()
    })
}

function alterarProduto() {
    titulo("ALTERAR PRODUTO")
    produto.connect()
    let id = parseInt(prompt("CÓDIGO DO PRODUTO A SER ALTERADO: "))
    produto.query(`UPDATE FROM produto_loja WHERE "codigo" = ${id}`, (err, res) => {
        produto.end()
    })

}



function excluirProduto() {
    titulo("EXCLUIR PRODUTO")
    produto.connect()
    let nome = prompt("NOME DO PRODUTO A SER EXCLUÍDO: ")
    produto.query(`DELETE FROM produto_loja WHERE "nome" = ${nome}`, (err, res) => {
        console.error(err ? err.stack : `O produto ${nome} foi excluído com sucesso.`)
        produto.end();
    })
}

function listarProdutos() {
    titulo("LISTAR PRODUTOS")
    produto.connect()
    produto.query(`SELECT * FROM produto_loja`, (err, res) => {
        if (err) {
            console.error(err.message)
        } if (res.rows.length > 0) {
            console.log(res.rows)
            produto.end()
        }

    })
}

do {
    let opcoes = ["SAIR", "CADASTRAR PRODUTO", "ALTERAR PRODUTO", "EXCLUIR PRODUTO", "BUSCAR PRODUTO", "LISTAR TODOS OS PRODUTOS"]
    console.log("------------------------- LOJA DE PRODUTOS -------------------------\n")
    for (let i = 0; i < opcoes.length; i++) {
        console.log(`${i}. ${opcoes[i]}`)
    }
    escolha = parseInt(prompt("Digite o número da opção: "))
    while (escolha < 0 || escolha > opcoes.length - 1) {
        console.log("Opção inválida. Por favor digite um opção válida.")
        escolha = parseInt(prompt("Digite o número da opção desejada: "))
    }
    if (escolha == 0) {
        titulo("FECHANDO PROGRAMA..")
        break;
    } else if (escolha == 1) {
        cadastrarProduto()

    } else if (escolha == 2) {
        listarProdutos()
        alterarProduto()
    } else if (escolha == 3) {
        listarProdutos()
        excluirProduto()

    } else if (escolha == 5) {
        listarProdutos()
        break
    }
} while (true)