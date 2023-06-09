let num=window.document.querySelector('input#fNum');
let lista=window.document.querySelector('select#fLista');
let res=window.document.querySelector('div#res');
let valores=[];

function isNumeros(n){
    if(n.length != 0 && Number(n) > 0 && Number(n) < 101){
        return true;
    }else{
        return false;
    }
}

function inLista(n){
    if(valores.indexOf(Number(n)) == -1){
        return false;
    }else{
        return true;
    }
}

function adicionar(){
    if(isNumeros(num.value) && !inLista(num.value)){
        //window.alert('Dados validados!');
        valores.push(Number(num.value));
        window.document.querySelector('option#op').style.display="none";
        let item=window.document.createElement('option');
        item.text=`Valor ${Number(num.value)} adicionado`;
        lista.appendChild(item);
        res.innerHTML='';
    }else{
        window.alert('Valor inválido ou já encontrado na lista');
    }
    num.value='';
    num.focus();
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Digite valores para poder finalizar');
    }else{
        let tot=valores.length;
        let maior=valores[0];
        let menor=valores[0];
        let soma=0;
        for(pos in valores){
            soma+=valores[pos];
            if(valores[pos] > maior){
                maior=valores[pos];
            }
            if(valores[pos] < menor){
                menor=valores[pos];
            }
        }
        let media=soma/valores.length;
        res.innerHTML='';
        res.innerHTML+=`<p>Ao todo, temos <strong>${tot}</strong> números cadastrados.</p>`;
        res.innerHTML+=`<p>O maior valor informado foi <strong>${maior}</strong>.</p>`;
        res.innerHTML+=`<p>O menor valor informado foi <strong>${menor}</strong>.</p>`;
        res.innerHTML+=`<p>Somando todos os valores, temos <strong>${soma}</strong></p>.`
        res.innerHTML+=`<p>A média dos valores digitados é <strong>${media.toFixed(2)}</strong></p>.`;
    }
}