function verificar() {
    var data = new Date() //sempre para pegar datas
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var nasc = Number(fano.value) //transformando em número o valor do 'fano'
    if (fano.value.length == 0 || fano.value > ano){ //se não tiver nada (length da resposta ser tamanho 0) ou o nascimento maior que ano atual, vai dar inválido
        window.alert('[ERRO!] Verifique os valores e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex') // não foi dado o valor porque ele seria dado nos ifs
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') //para a imagem aparecer
        img.getAttribute('id', 'foto') //colocando o atributo para buscar'id' igual no HTML
        res.innerHTML = `Idade: ${idade}`
        if (fsex[0].checked) { //'checked' para checar se [0] homem ou [1] mulher
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'homembebe.jpg') //buscando a imagem correspondente
            } else if (idade < 30) {
                //Jovem
                img.setAttribute('src', 'homemjovem.jpg') // 'src' de source(fonte)
            } else if (idade < 60) {
                //Meia idade
                img.setAttribute('src', 'homemmeia.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'homemvelho.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'mulherbebe.jpg')
            } else if (idade < 30) {
                //Jovem
                img.setAttribute('src', 'mulherjovem.jpg')
            } else if (idade < 60) {
                //Meia idade
                img.setAttribute('src', 'mulhermeia.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'mulhervelha.jpg')
            }
        }
        res.style.textAlign = 'center' // alinhando o texto ao centro
        res.innerHTML = `Idade: ${idade} / Gênero: ${genero}`
        res.appendChild(img) // para a imagem ser mostrada no site abaixo da resposta em texto
    }    
}