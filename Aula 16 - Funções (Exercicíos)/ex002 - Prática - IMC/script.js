function calcular(){
    let talt = (document.getElementById('talt'))
    let alt = Number(talt.value)
    let tpes = (document.getElementById('tpes'))
    let pes = Number(tpes.value)
    let res = document.getElementById('res')
    let imc = pes / (alt*alt) 
    let imagem = document.getElementById('imagem')
    res.innerHTML = `Resultado: Seu IMC é de ${imc}`
    if (imc < 18.5){
        res.innerHTML += '<p>Você está <strong>abaixo</strong> do peso ideal.</p>'
        imagem.src="olivia.jpg"
    } else if (imc >= 18.5 && imc < 25){
        res.innerHTML += '<p>Você está no peso <strong>ideal</strong>.</p>'
        imagem.src="popeye.jpg"
    } else if (imc >= 25 && imc < 30) {
        res.innerHTML += '<p>Você está com <strong>sobrepeso</strong>.</p>'
        imagem.src="dudu.jpg"
    } else if (imc >= 30 && imc < 35) {
        res.innerHTML += '<p>Você está em situação de <strong>obesidade</strong>.</p>'
        imagem.src="brutus.jpg"
    } else{
        res.innerHTML += '<p>Você está em situação de <strong>odesidade mórbida</strong>.</p>'
        imagem.src="whale.jpg"
    }
    talt.value = ''
    talt.focus()
    tpes.value = ''
}

