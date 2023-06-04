let num=[5,9,8,6,1]; //Declarando um array
console.log(`Nosso vetor tem ${num.length} posições`);
num.push(7);
console.log(num);
console.log(`Nosso vetor agora tem ${num.length} posições`);
console.log(`O primeiro elemento do vetor é ${num[0]}`);
num.sort();
console.log(num);
for(var c=0;c<num.length;c++){
    console.log(num[c]);
}
