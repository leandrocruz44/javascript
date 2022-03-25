function adicionar(){
    let tnum = document.getElementById('txtnum') // Pega o que é inserido na caixa de números
    let seq = document.getElementById('selnum') // Possibilita a manipulação e inclusão de valores no 'select'
    let res = document.getElementById('div2')
    if (tnum.value.length > 0){ // Se a quantidade de números na caixa for maior que nenhum
        let num = Number(tnum.value) // transforma o txt da caixa de números do site em um número
        if (lista.indexOf(num) == -1 && tnum.value > 0 && tnum.value <= 100){ // indexOf = -1 significa que o valor não foi encontrado na lista, que é o que precisamos porque não queremos repetir
            lista.push(num) // comando para inserir o número na 'lista'
            let item = document.createElement('option')  // \\
            item.text = `O número ${num} foi adicionado` // Local para inserir o valor dentro do 'select'
            seq.appendChild(item)                        // //
            //res.innerHTML = '' tentativa de limpar os resultados quando é inserido um novo número
        } else{
            window.alert('Número já inserido ou inválido. Digite outro valor.')
        }
    } else{
        window.alert('Insira pelo menos um valor.')
    } 
    tnum.value = '' //Para apagar o número do local onde se insere os valores
    tnum.focus() // Para "piscar" novamente no local onde se insere os valores
}

function finalizar(){
    if (lista.length > 0){
        let numcad = document.getElementById('numcad') // Possibilita a manipulação do local que tem o 'id' numcad
        numcad.innerHTML = `Foram inseridos ${lista.length} valores.` // insere o texto no local com tamanho da lista
        let maiornum = Math.max.apply(null, lista) // expressão para saber qual é o maior valor da array 'lista'
        let maior = document.getElementById('maior')
        maior.innerHTML =  `O maior número inserido foi ${maiornum}.`
        let menornum = Math.min.apply(null, lista) // saber o menor
        let menor = document.getElementById('menor')
        menor.innerHTML = `O menor número inserido foi ${menornum}.`
        let soma = document.getElementById('soma')
        let somar = s(lista)
        soma.innerHTML = `A soma dos valores inseridos é ${somar}.`
        let media = document.getElementById('media')
        let med = s(lista) / lista.length
        media.innerHTML = `A média dos valores é ${med}.`
    } else{
        window.alert('Não existem valores suficientes para realizar a análise.')
    }
    
}

function s(n){ // Função de soma
    let somado = 0
    for (let c = 0; c < n.length; c++){
        somado += n[c]
    }
    return somado
}

let lista = []

