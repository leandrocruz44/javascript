let amigo = {nome: 'José',
sexo: 'M',
peso: 85.4,
engordar(p=0){
    console.log('Engordou')
    this.peso += p
},
emagrecer(x=0){
    console.log('Emagreceu')
    this.peso -= x
}
}

amigo.emagrecer(12) // ou 'engordar'
console.log(`${amigo.nome} tem ${amigo.peso} quilos.`)
