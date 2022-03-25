function gerar(){
    var tnum = document.getElementById('txtnum')
    var tab = document.getElementById('seltab')
    if (tnum.value.length > 0){
        var num = Number(tnum.value)
    } else {
        window.alert('Por favor, digite um número')
    }
    tab.innerHTML = ''
    c = 1
    while (c <=10){
        var item = document.createElement('option')
        item.text = `${num} x ${c} = ${num*c}`
        tab.appendChild(item)
        c++
    }
}