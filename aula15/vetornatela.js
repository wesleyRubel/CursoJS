let num=[2,5,3,7,9,8,1];
num.sort();
/*let pos=0;
while(pos<num.length){
    console.log(`O valor da posição ${pos} = ${num[pos]}`);
    pos++;
}*/

for(let pos in num){
    console.log(`O valor da posição ${pos} = ${num[pos]}`);    
}
