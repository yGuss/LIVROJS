const respData = document.querySelector("#outData")
const respRelogio = document.querySelector("#outRelogio")


const hoje = new Date()
const dia = hoje.getDate()
const mes = hoje.getMonth() + 1
const ano = hoje.getFullYear()
const dia2 = dia.toString().padStart(2, "0")
const mes2 = mes.toString().padStart(2, "0")

respData.innerText = `${dia2}/${mes2}/${ano}`

setInterval(() => {
    const data = new Date()
    const horas = data.getHours()
    const minutos = data.getMinutes()
    const segundos = data.getSeconds()
    respRelogio.innerText = `${horas < 10 ? "0" + horas : horas}:${minutos < 10 ? "0" + minutos : minutos}:${segundos < 10 ? "0" + segundos : segundos}`
})













