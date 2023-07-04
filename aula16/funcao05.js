//Recursividade em funções

/* 
5! = 5x4x3x2x1
5! = 5x4!
n! = nx(n-1)!
1! = 1
*/

function fatorial(n=0){
    if(n == 1){
        return 1
    }else{
        return n*fatorial(n-1)
    }
}

console.log(`Fatorial = ${fatorial(8)}`)