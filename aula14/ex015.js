/*
var c=1;
while(c<=10){
    console.log(`Passo ${c}`);
    c++;
}

*/
console.log('Pares: ( )');
for(var c=1; c<=10; c++){
    if(c%2==0){
        console.log(`(${c})`);
    }else{
        console.log(c);
    }
}