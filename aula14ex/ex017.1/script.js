function tabuada(){
    var num=document.getElementById('inNumero');
    var tab=document.getElementById('selTabuada');
    if(num.value.lenght==0){
        window.alert('Por favor, digite um número!');
    }else{
        var n=Number(num.value);
    }
}
