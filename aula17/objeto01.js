let amigo = {nome:'José',
sexo:'M',
peso:85.4,
engordar(p=0){
   if(p > 0){
    console.log('Engordou')
   }else if(p < 0){
    console.log('Emagreceu')
   }else{
    console.log('Não houve alterações')
   }
   this.peso += p
}} //Declarando um objeto

amigo.engordar(10)
console.log(`Seu nome é ${amigo.nome} e pesa ${amigo.peso} Kg`)
