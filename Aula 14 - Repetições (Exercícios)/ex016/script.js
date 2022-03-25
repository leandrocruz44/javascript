function realizar(){
    var tinicio = document.getElementById('txtnum1')
    if (tinicio.value.length == 0 ){
        window.alert('Não foi inserido valor no campo [Início]')
    }
    var tfim = document.getElementById('txtnum2')
    if (tfim.value.length == 0 ){
        window.alert('Não foi inserido valor no campo [Fim]')
    }
    var tpasso = document.getElementById('txtnum3')
    if (tpasso.value.length == 0 ){
        window.alert('Não foi inserido valor no campo [Passo]')
    } 
    

    //if(tinicio.value.length == 0 || tfim.value.length == 0 || tpasso.value.length == 0)
    //  window.alert('ERRO! Valores inválidos')

    var inicio = Number(tinicio.value)
    var fim = Number(tfim.value)
    var passo = Number(tpasso.value)
    if (passo == 0){
        window.alert('Foi digitado Passo [0]. Alterado para Passo [1]')
        passo = 1
    }
    if (inicio < fim){
        for (var c=inicio; c<=fim; c+=passo){
            resposta.innerHTML += (`${c} \u{27A1}`)
        } 
    } else {
            for (var c=inicio; c>=fim; c-=passo){
                resposta.innerHTML += (`${c} \u{27A1}`)
            }
        }  
    resposta.innerHTML += `\u{2714}`
}