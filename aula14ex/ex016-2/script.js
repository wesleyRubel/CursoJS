
function contar() {
    //Criando os objetos referentes aos elementos a serem manipulados
    var i = window.document.getElementById('inicio')
    var f = window.document.getElementById('fim')
    var p = window.document.getElementById('passo')
    var res = window.document.getElementById('res')
    //Validando os dados de entrada
    if(i.value.length == 0 || f.value.length == 0 || p.value.length == 0){
        res.innerHTML='Impossível contar. Preencha os campos corretamente'
    }else{
        var passo = Number(p.value)
        var ini = Number(i.value)   
        var fim = Number(f.value) 
        var saida = ''
        if(passo <= 0){
            window.alert('Passo inválido! Vamos considerar Passo = 1')
            passo = 1
            if(ini > fim){
                saida = 'Impossível contar com os valores informados'
                res.innerHTML = saida
            }else{
                saida = `Contando: <br>`
                for(var c = ini;c <= fim; c += passo){
                    saida += `${c} \u{1f449}`
                }
                saida += `\u{1f3c1}`
                res.innerHTML = saida
            }
        }else{
            if(ini > fim){
                saida = 'Impossível contar com os valores informados'
                res.innerHTML=saida
            }else{
                saida = `Contando: <br>`
                for(var c = ini;c <= fim;c += passo){
                    saida += `${c} \u{1f449}`
                }
                saida += `\u{1f3c1}`
                res.innerHTML = saida
            }
        }
    }
}