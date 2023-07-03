let valores = [8,1,7,4,2,9]
/*let pos = 0
while(pos < valores.length){
    console.log(`Posição ${pos} = ${valores[pos]}`)
    pos++
}*/
valores.sort()
for(let pos in valores){
    console.log(`Posição ${pos} = ${valores[pos]}`)
}

let num = 6
if(valores.indexOf(num) != -1){
    console.log(`O valor existe dentro do array = ${valores[valores.indexOf(num)]}`)
}else{
    console.log(`Valor não foi encontrado dentro do vetor`)
}
