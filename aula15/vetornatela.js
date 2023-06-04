let valores=[8,1,7,4,2,9,11];
//let pos=0;
valores.sort();
console.log('Exibindo o vetor...');
/*while (pos<valores.length) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
    pos++;    
}*/

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}

let i=valores.indexOf(9);
if(i==-1){
    console.log(`O valor não foi encontrado`);
}else{
    console.log(`O valor esta na posição ${i}`);
}
