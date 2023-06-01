
const resp = document.querySelector("h3")

function randomGenerator(length) {
    let result = ''
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*"
    const charLength = chars.length
    let counter = 0
    while (counter < length) {
        result += chars.charAt(Math.floor(Math.random() * charLength))
        counter++
    }
    resp.innerText = `A senha gerada foi: ` + result
}

console.log(randomGenerator(8))