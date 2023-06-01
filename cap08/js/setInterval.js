const mostraHora = () => {
    const data = new Date()
    const hora = data.getHours()
    const min = data.getMinutes()
    const seg = data.getSeconds()
    console.log(`Atenção para o horário: ${hora}:${min}:${seg}`)
}
setInterval(mostraHora, 1000)

setInterval(() => {
    const data = new Date()
    const hora = data.getHours()
    const min = data.getMinutes()
    const seg = data.getSeconds()
    console.log(`Atenção para o horário: ${hora}:${min}:${seg}`)
}, 1000);