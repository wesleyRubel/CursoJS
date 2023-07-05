/*let numeros = [] //Array para receber os valores de entrada
let n = 0
//Função para validar e receber os valores
function adicionar(){
    let num = window.document.querySelector('input#num')
    //Validando a entrada
    if(num.value.length == 0 || Number(num.value) < 1 || Number(num.value) > 100){
        window.alert('Informe um valor válido')
    }else if(numeros.indexOf(Number(num.value)) != -1){
        window.alert('O valor já foi adicionado\nInforme outro número')
    }else{
        //window.alert('Tudo OK!')
        window.document.getElementById('res').innerHTML=''
        numeros.push(Number(num.value))
        window.document.getElementById('op').style.display="none"
        let Lnum = window.document.querySelector('select#Lnum')
        let op = window.document.createElement('option')
        op.value = `op${n+1}`
        op.text = `Valor ${numeros[n]} adicionado`
        Lnum.appendChild(op)
        n++
    }
    num.value = ''
    num.focus()
}

function maiorNum(){
    let maior = numeros[0]
    for(let pos in numeros){
        if(maior < numeros[pos]){
            maior = numeros[pos]
        }
    }
    return maior
}

function menorNum(){
    let menor = numeros[0]
    for(let pos in numeros){
        if(menor > numeros[pos]){
            menor = numeros[pos]
        }
    }
    return menor
}

function somaNum(){
    let s = 0
    for(let pos in numeros){
        s += numeros[pos]
    }
    return s
}

function mediaNum(s){
    return s/numeros.length
}

//Função para exibir os valores
function resultados(){
    if(numeros.length == 0){
        window.alert('Não existem números cadastrados')
        window.document.getElementById('num').focus()
    }else{
        let maior = maiorNum()
        let menor = menorNum()
        let s = somaNum()
        let m = mediaNum(s)
        let res = window.document.querySelector('div#res')
        res.innerHTML = ''
        let total = window.document.createElement('p')
        total.innerHTML = `Ao todo, temos <strong>${numeros.length}</strong> números cadastrados.`
        res.appendChild(total)
        let msgMaior = window.document.createElement('p')
        msgMaior.innerHTML = `O maior valor informado foi <strong>${maior}</strong>.`
        res.appendChild(msgMaior)
        let msgMenor = window.document.createElement('p')
        msgMenor.innerHTML = `O menor valor informado foi <strong>${menor}</strong>.`
        res.appendChild(msgMenor)
        let soma = window.document.createElement('p') 
        soma.innerHTML = `Somando todos os valores, temos <strong>${s}</strong>.`
        res.appendChild(soma)
        let media = window.document.createElement('p')
        media.innerHTML = `A média dos valores digitados é <strong>${m.toFixed(2)}</strong>.`
        res.appendChild(media)
    }
}

/*function ordenar(){
    if(numeros.length == 0){
        window.alert('Não existem números cadastrados')
        window.document.getElementById('num').focus()
    }else{
        let Lnum = window.document.querySelector('select#Lnum')
        Lnum.innerHTML = ''
        numeros.sort(function(a,b){return a-b})
        for(let pos in numeros){
            let op = window.document.createElement('option')
            op.value = `op${pos}`
            op.innerText = `Valor ${numeros[pos]} adicionado`
            Lnum.appendChild(op)
        }
    }
}

let btAdicionar = window.document.querySelector('input#ad')
btAdicionar.addEventListener('click',adicionar)
let btFinalizar = window.document.querySelector('input#fn')
btFinalizar.addEventListener('click',resultados)
let btOrdenar = window.document.querySelector('input#od')
btOrdenar.addEventListener('click',ordenar)*/

let num = window.document.querySelector('input#num')
let Lnum = window.document.querySelector('select#Lnum')
let res = window.document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (n.length == 0 || Number(n) < 1 || Number(n) > 100) {
        return false
    } else {
        return true
    }
}

function isLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function isArray(l){
    if(l.length == 0){
        return true
    }else{
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !isLista(num.value, valores)) {
        //alert('Tudo OK')
        window.document.getElementById('op').style.display = "none"
        valores.push(Number(num.value))
        let item = window.document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        Lnum.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(isArray(valores)){
        window.alert('É necessário adicionar valores')
        num.focus()
    }else{
        res.innerHTML = ''
        let tot = valores.length
        res.innerHTML += `<p>Ao todo temos, <strong>${tot}</strong> números cadastrados.</p>`
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        let media = soma/tot
        res.innerHTML += `<p>O maior valor adicionado foi <strong>${maior}</strong>.</p>`
        res.innerHTML += `<p>O menor valor adicionado foi <strong>${menor}</strong>.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos <strong>${soma}</strong>.</p>`
        res.innerHTML += `<p>A média dos valores digitados é <strong>${media.toFixed(2)}</strong>.</p>`
    }    
}