let fatorial=function(f){
    let res=f;
    for(let c=res-1;c>=1;c--){
        res*=c;
    }
    return res;
}

console.log(`O fatorial é ${fatorial(7)}`);