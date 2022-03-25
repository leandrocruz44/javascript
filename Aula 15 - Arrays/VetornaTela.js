var array = [1,34,54,7,87,55,98,334,5,2]
console.log(array)
/*for (c = 0; c < array.length; c++){
    console.log(`O número na posição ${c} é o ${array[c]}. Morô!?`)
}*/

for(c in array){
    console.log(`O número na posição ${c} é igual a ${array[c]}`)
}

var pos = array.indexOf(335)
if (pos == -1){
    console.log('O valor não foi encontrado.')
} else{
    console.log(`O número está na posição ${pos}`)
}

//indexOf (Of com letra maiúscula())