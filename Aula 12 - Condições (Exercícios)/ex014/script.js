function carregar (){
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 23//data.getHours()
    msg.innerHTML = `Agora são ${hora}:00 horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        imagem.src = 'manhã.jpg'
        document.body.style.background = 'yellow'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        imagem.src = 'tarde.jpg'
        document.body.style.background = 'orange'
    } else {
        //BOA NOITE!
        imagem.src = 'noite.jpg'
        document.body.style.background = 'darkblue'
    }
}

