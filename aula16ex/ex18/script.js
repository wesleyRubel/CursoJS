let valores=[]; //Declarando um vetor que receberá os números digitados pelo usuário

function adicionar(){
    let num=window.document.getElementById('inNum');
    //Validando os dados digitados pelo usuário
    if(num.value.length == 0){
        window.alert('É necessário informar um valor');
    }else if(Number(num.value) < 1 || Number(num.value) > 100){
        window.alert('Valor inválido! Digite um número entre 1 e 100');
    }else if(valores.indexOf(Number(num.value)) != -1){
        window.alert(`O número ${num.value} já foi escolhido. Digite outro número`);   
    }else{
        valores.push(Number(num.value)); //Adicionando os valores digitados pelo usuário no vetor
        //Adicionando os valores digitados pelo usuário no select
        let n=Number(num.value);
        let lNumeros=window.document.getElementById('lNum');
        let item=window.document.createElement('option');
        item.text=`Valor ${n} adicionado`;
        lNumeros.appendChild(item);
        window.document.getElementById('op').style.display="none";
        window.document.getElementById('res').style.display="none";
    }
}

//Função que retorna o números de elementos adicionados
function totalValores(){
    return valores.length;
}
//Função que retorna o maior número informado
function maiorValor(){
    let maior=0;
    for(pos in valores){
        if(maior < valores[pos]){
            maior=valores[pos];
        }
    }
    return maior;
}
//Função que retorna o menor número informado
function menorValor(){
    let menor=valores[0];
    for(pos in valores){
        if(valores[pos] < menor){
            menor=valores[pos];
        }
    }
    return menor;
}
//função que retorna a soma dos elementos informados
function somarValores(){
    let soma=0;
    for(pos in valores){
        soma+=valores[pos];
    }
    return soma;
}
//Função que retorna a média dos valores informados
function calculaMedia(){
    let media=0;
    let s=somarValores();
    media=s/valores.length;
    return media;
}

function finalizar(){
    if(valores.length != 0){
        let resultados=window.document.getElementById('res');
    resultados.style.display="block";
    //Verificando quantos números foram adicionados
    let qtd=totalValores();
   /* let total=window.document.createElement('p');
    total.innerHTML=`Ao todo temos <strong>${qtd}</strong> números cadastrados`;
    resultados.appendChild(total);*/
    window.document.getElementById('total').innerHTML=`Ao todo, temos <strong>${qtd}</strong> números cadastrados.`;

    //Verificando o maior número digitado
    let maior=maiorValor();
    window.document.getElementById('maior').innerHTML=`O maior valor informado foi <strong>${maior}</strong>.`;

    //Verificando o menor número digitado
    let menor=menorValor();
    window.document.getElementById('menor').innerHTML=`O menor valor informado foi <strong>${menor}</strong>.`;

    //Retornando a soma dos valores informados
    let soma=somarValores();
    window.document.getElementById('soma').innerHTML=`Somando todos os valores, temos <strong>${soma}</strong>`;

    //Retornando a média dos valores informados
    let media=calculaMedia();
    window.document.getElementById('media').innerHTML=`A média dos valores digitados é <strong>${media.toFixed(2)}</strong>.`;
    }else{
        window.alert('Não há valores a serem exibidos.');
    }
    
}