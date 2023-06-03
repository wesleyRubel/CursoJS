function gerarTabuada(){
    var numero=window.document.getElementById('inNumero');
    if(numero.value==''){
        window.alert('Digite um número para gerar tabuada');
    }else{
        var num=Number(numero.value);
        var tabuada='';
        for(var c=1;c<=10;c++){
            tabuada+=`${num} X ${c} = ${num*c} <br>`;
        }
        window.document.getElementById('outTabuada').style.display="inline-block";
        window.document.getElementById('outTabuada').innerHTML=tabuada;
    }
}