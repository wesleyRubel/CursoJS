let fatorial = function(f=0){
    let res = f
    for(let c = f-1; c > 1;c--){
        res *= c
    }
    return res
}

console.log(`Fatorial = ${fatorial(7)}`)