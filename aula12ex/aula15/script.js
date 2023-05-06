function verificar(){
    var data=new Date();
    var ano=data.getFullYear();
    var fAno=window.document.getElementById('inAno');
    var res=window.document.querySelector('div#outMsg');
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
        var img=window.document.getElementById('foto');
        if(fsex[0].checked){
            genero='Homem';
            res.innerHTML=`Detectamos ${genero} com ${idade} anos`;
            img.innerHTML='<img src="imagens/homemAdulto.png" alt="Homem Adulto">';
        }else if(fsex[1].checked){
            genero='Mulher';
            res.innerHTML=`Detectamos ${genero} com ${idade} anos`;
            img.innerHTML='<img src="imagens/mulherJovem.png" alt="Mulher Jovem">';
        }else{
            window.alert('[ERRO] Verifique os dados e tente novamente');
            window.document.getElementById('outSexo').style.borderWidth="0px 0px 1px 0px";
            window.document.getElementById('outSexo').style.borderStyle="dotted";
            window.document.getElementById('outSexo').style.borderColor="red";    
        }
        
    }
}

var btn=window.document.querySelector('input#btVerificar');
btn.addEventListener('click',verificar);