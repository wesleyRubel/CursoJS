/*let nomes = ['Wesley', 'João', 'Marcos', 'Daniel', 'Alessandro', 'Adão']
console.log('Lista:')
for(let pos in nomes){
    console.log(nomes[pos])
}
console.log('\n\n')
nomes.sort()
console.log('Lista em ordem crescente: ')
for(let pos in nomes){
    console.log(nomes[pos])
}
console.log('\n\n')
nomes.reverse()
console.log('Lista em ordem decrescente')
for(let pos in nomes){
    console.log(nomes[pos])
}*/



let num = [1,2,9,5,4,10,20,15]
for(let pos in num){
    console.log(num[pos])
}
num.sort()
console.log('\n')
for(let pos in num){
    console.log(num[pos])
}

num.sort(function(a,b){return a-b})
console.log('Números ordenados \n')
for(let pos in num){
    console.log(num[pos])
}
