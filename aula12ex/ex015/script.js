function verificar(){
    var data = new Date()
    var anoA = data.getFullYear()
    var anoN = window.document.getElementById('anoN')
    var res = window.document.getElementById('res')

    //Validando os dados de entrada
    if(anoN.value.length == 0 || Number(anoN.value) > anoA || Number(anoN.value) < 1900){
        window.alert('Verifique os dados e tente novamente!')
        anoN.value=''
        anoN.focus()
    }else{
        //window.alert('Dados validados!')
        var sexo = window.document.getElementsByName('sex')
        var idade = anoA - Number(anoN.value)
        //res.innerHTML=`Idade calculada ${idade}`
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('alt','Foto de uma pessoa')
        if(sexo[0].checked){
            genero = 'Homem'
            res.innerHTML=`Detectamos um ${genero} de ${idade} anos de idade`
            if(idade <=10){
                //Criança
                img.setAttribute('src','./imagens/homemCrianca.png')
            }else if(idade <=21){
                //Jovem
                img.setAttribute('src','./imagens/homemJovem.png')
            }else if(idade < 60){
                //Adulto
                img.setAttribute('src','./imagens/homemAdulto.png')
            }else{
                //Idoso
                img.setAttribute('src','./imagens/homemIdoso.png')
            }
        }else if(sexo[1].checked){
            genero = 'Mulher'
            res.innerHTML=`Detectamos uma ${genero} de ${idade} anos de idade`
            if(idade <=10){
                //Criança
                img.setAttribute('src','./imagens/mulherCrianca.png')
            }else if(idade <=21){
                //Jovem
                img.setAttribute('src','./imagens/mulherJovem.png')
            }else if(idade < 60){
                //Adulto
                img.setAttribute('src','./imagens/mulherAdulta.png')
            }else{
                //Idoso
                img.setAttribute('src','./imagens/mulherIdosa.png')
            }
        }else{
            window.alert('Preencha o campo sexo acima')
        }
        res.appendChild(img)
        img.style.margin="10px 10px"
    }
}