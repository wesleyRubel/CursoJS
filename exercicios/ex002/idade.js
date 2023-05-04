var agora = new Date();
var anoAtual = agora.getFullYear();
function verificaIdade() {
    //Selecionando os elementos HTML
    var anoNascimento = window.document.getElementById('inAno');
    var masculino = window.document.getElementsByName('sexo')[0];
    var feminino = window.document.getElementsByName('sexo')[1];
    //Recebendo os valores dos elementos
    var anoNasc = Number(anoNascimento.value);
    var idade = anoAtual - anoNasc;
    //Verificando se o usuário preencheu os campos corretamente
    if (anoNasc != '' && anoNasc < anoAtual) {
        if (masculino.checked) {
            if (idade < 18) {
                window.document.getElementById('outMsg').innerHTML = `Garoto de ${idade} anos`;
                window.document.getElementById('outMsg').style.textAlign = "center";
                window.document.getElementById('outMsg').style.fontWeight = "bold";
                window.document.getElementById('outImage').style.display = "block";
                window.document.getElementById('outImage').style.background = "url(./imagens/homemCriança-300.jpg) center center no-repeat";
                window.document.getElementById('outImage').style.backgroundSize = "cover";
            } else if (idade < 65) {
                window.document.getElementById('outMsg').innerHTML = `Homem de ${idade} anos`;
                window.document.getElementById('outMsg').style.textAlign = "center";
                window.document.getElementById('outMsg').style.fontWeight = "bold";
                window.document.getElementById('outImage').style.display = "block";
                window.document.getElementById('outImage').style.background = "url(./imagens/homemJovem-200.jpg) center center no-repeat";
                window.document.getElementById('outImage').style.backgroundSize = "cover";
            } else {
                window.document.getElementById('outMsg').innerHTML = `Homem de ${idade} anos`;
                window.document.getElementById('outMsg').style.textAlign = "center";
                window.document.getElementById('outMsg').style.fontWeight = "bold";
                window.document.getElementById('outImage').style.display = "block";
                window.document.getElementById('outImage').style.background = "url(./imagens/homemIdoso-200.jpeg) center center no-repeat";
                window.document.getElementById('outImage').style.backgroundSize = "cover";
            }
        } else if (feminino.checked) {
            if (idade < 18) {
                window.document.getElementById('outMsg').innerHTML = `Garota de ${idade} anos`;
                window.document.getElementById('outMsg').style.textAlign = "center";
                window.document.getElementById('outMsg').style.fontWeight = "bold";
                window.document.getElementById('outImage').style.display = "block";
                window.document.getElementById('outImage').style.background = "url(./imagens/mulherCriança-300.jpg) center center no-repeat";
                window.document.getElementById('outImage').style.backgroundSize = "cover";
            } else if (idade < 65) {
                window.document.getElementById('outMsg').innerHTML = `Mulher de ${idade} anos`;
                window.document.getElementById('outMsg').style.textAlign = "center";
                window.document.getElementById('outMsg').style.fontWeight = "bold";
                window.document.getElementById('outImage').style.display = "block";
                window.document.getElementById('outImage').style.background = "url(./imagens/mulherJovem-200.jpg) center center no-repeat";
                window.document.getElementById('outImage').style.backgroundSize = "cover";
            } else {
                window.document.getElementById('outMsg').innerHTML = `Mulher de ${idade} anos`;
                window.document.getElementById('outMsg').style.textAlign = "center";
                window.document.getElementById('outMsg').style.fontWeight = "bold";
                window.document.getElementById('outImage').style.display = "block";
                window.document.getElementById('outImage').style.background = "url(./imagens/mulherIdosa-200.jpg) center center no-repeat";
                window.document.getElementById('outImage').style.backgroundSize = "cover";
            }
        } else {
            alert('ERRO! Preencha corretamente os campos');
            window.document.getElementById('inputsS').style.borderWidth = "0px 0px 1px 0px";
            window.document.getElementById('inputsS').style.borderColor = "red";
            window.document.getElementById('inputsS').style.borderStyle = "dotted";
        }
    } else {
        alert('ERRO! Preencha corretamente os campos');
        window.document.getElementById('inputsA').style.borderWidth = "0px 0px 1px 0px";
        window.document.getElementById('inputsA').style.borderColor = "red";
        window.document.getElementById('inputsA').style.borderStyle = "dotted";
    }
}

var verificar = window.document.getElementById('btVerificar');
verificar.addEventListener('click', verificaIdade);