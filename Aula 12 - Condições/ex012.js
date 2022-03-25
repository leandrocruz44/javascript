var agora = new Date()
var horas = agora.getHours()
if (horas < 6) {
    var saudacao = 'madrugada'
} else if (horas < 13) {
    var saudacao = 'manhã'
} else if (horas < 18) {
    var saudacao = 'tarde'
} else {
    var saudacao = 'noite'
}
console.log(`Agora são ${horas} horas da ${saudacao}.`)
if (horas < 6) {
    console.log('Boa madrugada')
} else if (horas < 12) {
    console.log('Bom dia')
} else if (horas <= 18) {
    console.log('Boa tarde')
} else {
    console.log('Boa noite')
}