const prompt = require("prompt-sync")()
const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '123456',
    port: 5432,
});

console.log("------------------------- Escolha uma opção -------------------------\n")
var escolha = parseInt(prompt("[1] Cadastrar\n[2] Login\n[0] Sair\n "))

let numero = escolha
switch (numero) {
    case 1:
        client.connect()
        console.log("------------------------- CADASTRAR USUÁRIO -------------------------\n")
        var username = prompt("Username: ")
        var password = prompt("Senha: ")
        client.query('INSERT INTO users (username, password) VALUES ($1, $2)', [username, password], (err, res) => {
            if (err) {
                console.error(err.message);
            } else {
                console.log('Usuário Cadastrado');
            }
            client.end();
        });
        break;

    case 2:

        client.query('SELECT * FROM users WHERE username = $1 AND password = $2', [username, password], (err, res) => {
            if (err) {
                console.error(err.message);
            } else {
                if (res.rows.length > 0) {
                    console.log('User authenticated');
                } else {
                    console.log('Username or password incorrect');
                }
            }
            client.end();
        });
}
