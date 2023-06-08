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
        window.document.getElementById('saida').style.display="none";
    }
}

//Função que retorna o números de elementos adicionados
function totalValores(){
    return valores.length;
}

function finalizar(){
    let resultados=window.document.getElementById('saida');
    resultados.style.display="block";
    //Verificando quantos números foram adicionados
    let qtd=totalValores();
    let total=window.document.createElement('p');
    total.innerHTML=`Ao todo temos <strong>${qtd}</strong> números cadastrados`;
    resultados.appendChild(total);
}