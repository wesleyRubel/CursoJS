let num=[2,5,3,7,9]; //Declarando um vetor de 5 elementos
console.log(`Nosso vetor é composto pelos valores ${num}`);
console.log(`O valor do índice 0 é ${num[0]}`);
num[5]=6; //Cria um novo elemento de índice 5 ao vetor que irá receber o valor 6
console.log(`Vetor atualizado ${num}`);
num.push(8);
console.log(`Vetor atualizado ${num}`);
let n=num.length;
console.log(`Nosso array tem ${n} elementos`);
num.sort(); //Ordena os valores do vetor em ordem crescente
console.log(`Vetor organizado ${num}`);
let i=num.indexOf(1);
console.log(i);
