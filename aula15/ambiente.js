let num = [5,8,2,9,3] //Declarando um array e atribuímos 5 elementos
//0 = 5, 1 = 8, 2 = 2, 3 = 9, 4 = 3
num[5] = 6 //O JavaScript ira criar um espaço no array com o índice 5 e atribuir o valor 10
num.push(7) //Cria um elemento no final do array e guarda o valor 7
console.log(`Nosso vetor é o ${num}`)
console.log(`O array possui ${num.length} elementos`)
for(let c = 0;c < num.length; c++){
    console.log(`Posição ${c} = ${num[c]}`)
}
num.sort() //Ordena os elementos do vetor em ordem crescente
for(let c = 0;c < num.length;c++){
    console.log(`Posição ${c} = ${num[c]}`)
}