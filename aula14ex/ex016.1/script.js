function contar() {
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
}