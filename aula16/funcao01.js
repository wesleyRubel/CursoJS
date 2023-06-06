function parimp(n){ //Criando uma função que verifica se determinado número é par ou ímpar
    if(n%2 == 0){
        return 'Par!';
    }else{
        return 'Ímpar!';
    }
}

//let res=parimp(3); //Cria uma variável que faz a chamada da função 'parimp'
console.log(parimp(7));