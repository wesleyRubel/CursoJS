function contar(){
    //Criando os objetos referentes aos elementos que serão manipulados
    var numero_inicial=window.document.getElementById('iInicio');
    var numero_final=window.document.getElementById('iFim');
    var passo=window.document.getElementById('iPasso');
    var saida=window.document.getElementById('outSaida');
    //Verificando se o usuário preencheu os campos corretamente
    if(numero_inicial.value=='' || numero_final.value==''){
        window.alert('Preencha os campos corretamente');
    }else if(passo.value=='' || passo.value<='0'){
        window.alert('Preencha o campo Passo corretamente');
    }else{
        //Recebendo os valores digitados pelo usuário
        var num1=Number(numero_inicial.value);
        var num2=Number(numero_final.value);
        var p=Number(passo.value);
        var res='';
        if(num1==num2){
            window.alert('Os números de ínicio e fim não podem ser iguais');
        }else if(num1<num2){
            res=`Contando: ${num1}`;
            for(var c=num1;c<=num2;c+=p){
                if(c+p<=num2){
                    res+=`&#x1f449 ${c+p}`;
                }else{
                    res+=`&#x1f3c1`;
                }
            }
        }else if(num1>num2){
            res=`Contando: ${num1}`;
            for(var c=num1;c>=num2;c-=p){
                if(c-p>=num2){
                    res+=`&#x1f449 ${c-p}`;
                }else{
                    res+=`&#x1f3c1`;
                }
            }
        }
        saida.innerHTML=res;
    }
}
var btn=window.document.getElementById('btContar');
btn.addEventListener('click',contar);