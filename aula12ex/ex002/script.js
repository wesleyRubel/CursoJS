function verificar(){
    var data=new Date();
    var ano=data.getFullYear();
    var fAno=window.document.getElementById('inAno');
    var res=window.document.querySelector('div#outMsg');
    var foto=window.document.getElementById('foto');
    if(fAno.value.length==0 || fAno.value<1900 || fAno.value>ano){
        window.alert('[ERRO] Verifique os dados e tente novamente');
        window.document.getElementById('anoNasc').style.borderWidth="0px 0px 1px 0px";
        window.document.getElementById('anoNasc').style.borderStyle="dotted";
        window.document.getElementById('anoNasc').style.borderColor="red";
    }else{
        var fsex=window.document.getElementsByName('sexo');
        var idade=ano-Number(fAno.value);
        //res.innerHTML=`Idade calculada = ${idade}`;
        var genero='';
        var img=window.document.createElement('img'); //Criando um elemento HTML
        img.setAttribute('id','imagem'); //Criando um id para o elemento img
        if(fsex[0].checked){
            genero='Homem';
            if(idade>=0 && idade<=10){
                //Criança
                res.innerHTML=`Detectamos um ${genero} de ${idade} anos`;
                img.setAttribute('src','imagens/homemCrianca.png');
                img.setAttribute('alt','Menino');
            }else if(idade<21){
                //Jovem
                res.innerHTML=`Detectamos um ${genero} de ${idade} anos`;
                img.setAttribute('src','imagens/homemJovem.png');
                img.setAttribute('alt','Homem jovem');
            }else if(idade<50){
                //Adulto
                res.innerHTML=`Detectamos um ${genero} de ${idade} anos`;
                img.setAttribute('src','imagens/homemAdulto.png');
                img.setAttribute('alt','Homem adulto');
            }else{
                //Idoso
                res.innerHTML=`Detectamos um ${genero} de ${idade} anos`;
                img.setAttribute('src','imagens/homemIdoso.png');
                img.setAttribute('alt','Homem idoso');
            }
        }else if(fsex[1].checked){
            genero='Mulher';
            if(idade>=0 && idade<=10){
                //Criança
                res.innerHTML=`Detectamos uma ${genero} de ${idade} anos`;
                img.setAttribute('src','imagens/mulherCrianca.png');
                img.setAttribute('alt','Menina');
            }else if(idade<21){
                //Jovem
                res.innerHTML=`Detectamos uma ${genero} de ${idade} anos`;
                img.setAttribute('src','imagens/mulherJovem.png');
                img.setAttribute('alt','Mulher jovem');
                img.style.width="400px";
            }else if(idade<50){
                //Adulto
                res.innerHTML=`Detectamos uma ${genero} de ${idade} anos`;
                img.setAttribute('src','imagens/mulherAdulta.png');
                img.setAttribute('alt','Mulher adulta');
            }else{
                //Idoso
                res.innerHTML=`Detectamos uma ${genero} de ${idade} anos`;
                img.setAttribute('src','imagens/mulherIdosa.png');
                img.setAttribute('alt','Mulher idosa');
            }
        }else{
            window.alert('[ERRO] Verifique os dados e tente novamente');
            window.document.getElementById('outSexo').style.borderWidth="0px 0px 1px 0px";
            window.document.getElementById('outSexo').style.borderStyle="dotted";
            window.document.getElementById('outSexo').style.borderColor="red";    
        }
        foto.appendChild(img); //Incluindo o elemento img a div de id="foto"
    }
}

var btn=window.document.querySelector('input#btVerificar');
btn.addEventListener('click',verificar);