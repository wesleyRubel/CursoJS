var bt = window.document.getElementById('btVerificar')
bt.addEventListener('click', verificar)

//Função para validar os dados de entrada
function validar(ano, anoN, s1, s2) {
    if (anoN.value == '' || anoN.value > ano || anoN.value < 1900) {
        anoN.value = ''
        anoN.focus()
        return false
    } else if (!(s1.checked) && !(s2.checked)) {
        return false
    } else {
        return true
    }
}

function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var anoNasc = window.document.querySelector('input#anoN')
    var sexo = window.document.getElementsByName('sex')
    var v = validar(ano, anoNasc, sexo[0], sexo[1])
    if (v) {
        //window.alert('Dados Validados!')
        var anoN = Number(anoNasc.value)
        var idade = ano - anoN
        var res = window.document.getElementById('res')
        //var img = window.document.getElementById('foto')
        //res.innerHTML = ''
        var img = window.document.createElement('img')
        img.setAttribute('alt', 'pessoas')
        img.style.display = "block"
        img.style.margin = "auto"
        img.style.marginTop = "20px"
        img.style.marginBottom = "20px"
        if (sexo[0].checked) {
            res.innerHTML = `Detectamos um homem de ${idade} anos`
            res.appendChild(img)
            if (idade <= 12) {
                img.setAttribute('src', './imagens/homemCrianca.png')
            }else if(idade <= 20){
                img.setAttribute('src','./imagens/homemJovem.png')
            }else if(idade < 60){
                img.setAttribute('src','./imagens/homemAdulto.png')
            }else{
                img.setAttribute('src','./imagens/homemIdoso.png')
            }
        }else if(sexo[1].checked){
            res.innerHTML = `Detectamos uma mulher de ${idade} anos`
            res.appendChild(img)
            if (idade <= 12){
                img.setAttribute('src','./imagens/mulherCrianca.png')
            }else if (idade <= 20){
                img.setAttribute('src','./imagens/mulherJovem.png')
            }else if (idade < 60){
                img.setAttribute('src','./imagens/mulherAdulta.png')
            }else{
                img.setAttribute('src','./imagens/mulherIdosa.png')
            }
        }
    } else {
        window.alert('ERRO! Preencha os campos corretamente')
    }
}