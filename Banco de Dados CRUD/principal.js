const prompt = require("prompt-sync")()
const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '123456',
    port: 5432,
});

let opcoes = ["SAIR", "CADASTRAR USUÁRIO", "LOGIN DE USUÁRIO", "EXCLUIR USUÁRIO", "LISTAR USUÁRIO", "LISTAR TODOS OS USUÁRIOS\n"];
console.log("Escolha uma opção:\n ");
for (let i = 0; i < opcoes.length; i++) {
    console.log(`${i}. ${opcoes[i]}`);
}
userChoice = parseInt(prompt("Digite o número da opção: "));
while (userChoice < 0 || userChoice > (opcoes.length - 1)) {
    console.log("Opção inválida. Por favor, escolha novamente.");
    userChoice = parseInt(prompt("Digite o número da opção desejada: "));
}

switch (userChoice) {

    case 0:
        console.log("------------------------- PROGRAMA FECHADO -------------------------")
        break;
    case 1:
        console.log("------------------------- CADASTRAR USUÁRIO -------------------------\n")
        client.connect()
        var username = prompt("Usuário: ")
        var password = prompt("Senha: ")
        client.query('INSERT INTO users (username, password) VALUES ($1, $2)', [username, password], (err, res) => {
            if (err) {
                console.error(err.message);
            } else {
                console.log('Usuário Cadastrado');
            }
            client.end();
        })
        break;

    case 2:
        console.log("------------------------- LOGIN DE USUÁRIO -------------------------\n")
        client.connect()
        var username = prompt("Username: ")
        var password = prompt("Senha: ")
        client.query('SELECT * FROM users WHERE username = $1 AND password = $2', [username, password], (err, res) => {
            if (err) {
                console.error(err.message);
            } else {
                if (res.rows.length > 0) {
                    console.log('Usuário Autenticado');
                } else {
                    console.log('Usuário ou senha incorretos');
                }
            }
            client.end();
        })
        break;


    case 3:
        console.log("------------------------- EXCLUIR USUÁRIO -------------------------\n")
        client.connect()
        var username = prompt("Usuário a ser excluído: ")
        client.query(`DELETE FROM users WHERE username = $1`, [username], (err, res) => {
            console.error(err ? err.stack : `O usuário ${username} foi excluído com sucesso.`);
            client.end();
        })
        break;

    case 4:
        console.log("------------------------- LISTAR USUÁRIO -------------------------\n")
        client.connect()
        var username = prompt("Usuário a ser listado: ")
        client.query(`SELECT * FROM users where username = $1`, [username], (err, res) => {
            if (err) {
                console.error(err.message)
            } else {
                if (res.rows.length > 0) {
                    console.log(res.rows)
                } else {
                    console.log(`Usuário ${username} não foi encontrado no Banco de Dados`);
                }
            }
            client.end();
        })
        break;

    case 5:
        console.log("------------------------- LISTAR USUÁRIOS -------------------------\n")
        client.connect()
        client.query('SELECT * FROM users ORDER BY username ASC', (err, res) => {
            console.log(err ? err.stack : res.rows);
            client.end();
        })
        break;

    default:
        return

}