/*function contar() {
    var ini = window.document.querySelector('input#iInicio');
    var fim = window.document.querySelector('input#iFim');
    var passo = window.document.querySelector('input#iPasso');
    var res = window.document.querySelector('div#res');

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!');
        res.innerHTML=`Impossível contar...`;
    } else {
        var saida = 'Contando:';
        var i = Number(ini.value);
        var f = Number(fim.value);
        var p = Number(passo.value);

        if(p<=0){
            window.alert('PASSO inválido! Considerando PASSO 1');
            p=1;
        }

        if (i < f) {
            for (var c = i; c <= f; c += p) {
                saida += ` ${c} \u{1f449}`;
            }
            saida += ` \u{1f3c1}`;
            res.innerHTML = saida;
        } else {
            for (var c = i; c >= f; c -= p) {
                saida += ` ${c} \u{1f449}`;
            }
            saida+=` \u{1f3c1}`;
            res.innerHTML = saida;
        }
    }
}*/

function contar(){
    //Criando os objetos referentes aos elementos a serem manipulados
    var inicio = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var passo = window.document.getElementById('passo')
    var res = window.document.getElementById('res')

    //Validando os dados de entrada
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar...'
    }else{
        //window.alert('Dados validados')
        res.innerHTML = 'Contando:'
        //Convertendo os valores de entrada
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        //Varificando o valor do passo
        if(p <= 0){
            window.alert('PASSO inválido! Considerando PASSO 1')
            p = 1
        }
        //Contagem
        if(i < f){ //Crescente
            for(var c = i;c <= f;c += p){
                res.innerHTML += ` ${c} \u{1f449}`
            }
        }else{ //Decrescente
            for(var c = i;c >= f;c -= p){
                res.innerHTML += ` ${c} \u{1f449}`
            }
        }
        res.innerHTML += ` \u{1f3c1}`
    }
} 