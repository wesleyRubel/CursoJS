function verificar() {
    var data = new Date();
    var anoA = data.getFullYear();
    var anoN = window.document.getElementById('inAno');
    if (anoN.value.length == 0 || anoN.value < 1900 || anoN.value > anoA) {
        window.alert('[ERRO] Preencha os campos corretamente');
        window.document.getElementById('labelAno').style.borderWidth = "0px 0px 1px 0px";
        window.document.getElementById('labelAno').style.borderStyle = "dotted";
        window.document.getElementById('labelAno').style.borderColor = "red";
    } else {
        var idade = anoA - Number(anoN.value);
        var sex = window.document.getElementsByName('sexo');
        var genero = '';
        if (sex[0].checked) {
            genero = 'Homem';
            var img=document.createElement('img');
           // img.setAttribute('src','imagens/homemAdulto.png');
           // img.setAttribute('alt','Homem Adulto');
            window.document.querySelector('p#outMsg').innerHTML = `Detectamos um ${genero} de ${idade} anos`;
            if(idade>=0 && idade<=10){
                //Criança
                img.setAttribute('src','imagens/menino.png');
                img.setAttribute('alt','Menino');
            }else if(idade<21){
                //Jovem
                img.setAttribute('src','imagens/homemJovem.png');
                img.setAttribute('alt','Homem Jovem');
            }else if(idade<50){
                //Adulto
                img.setAttribute('src','imagens/homemAdulto.png');
                img.setAttribute('alt','Homem Adulto');
            }else{
                //Idoso
                img.setAttribute('src','imagens/homemIdoso.png');
                img.setAttribute('alt','Homem Idoso');
            }
        window.document.getElementById('outMsg').style.textAlign = "center";
        } else if (sex[1].checked) {
            genero = 'Mulher';
            var img=document.createElement('img');
           // img.setAttribute('src','imagens/mulherAdulta.png');
           // img.setAttribute('alt','Mulher Adulta');
            window.document.querySelector('p#outMsg').innerHTML = `Detectamos uma ${genero} de ${idade} anos`;
            if(idade>=0 && idade<=10){
                //Criança
                img.setAttribute('src','imagens/menina.png');
                img.setAttribute('alt','Menina');
            }else if(idade<21){
                //Jovem
                img.setAttribute('src','imagens/mulherJovem.png');
                img.setAttribute('alt','Mulher Jovem');
            }else if(idade<50){
                //Adulto
                img.setAttribute('src','imagens/mulherAdulta.png');
                img.setAttribute('alt','Mulher Adulta');
            }else{
                //Idoso
                img.setAttribute('src','imagens/mulherIdosa.png');
                img.setAttribute('alt','Mulher Idosa');
            }
        window.document.getElementById('outMsg').style.textAlign = "center";
        } else {
            window.alert('[ERRO] Preencha os campos corretamente');
            window.document.getElementById('spanSexo').style.borderWidth = "0px 0px 1px 0px";
            window.document.getElementById('spanSexo').style.borderStyle = "dotted";
            window.document.getElementById('spanSexo').style.borderColor = "red";
        }
        window.document.getElementById('outImage').appendChild(img);
        window.document.getElementById('outImage').style.textAlign="center";
    }
}