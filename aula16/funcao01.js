function parimp(n){ //Função que verifica se determidado número é par ou ímpar
    if(n%2 == 0){
        return 'Par'
    }else{
        return 'Ímpar'
    }
}

let res = parimp(7) //Fazendo a chamada da função que irá retornar a variável o resultado
console.log(`O número é ${res}`)