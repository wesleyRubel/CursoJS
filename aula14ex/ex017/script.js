/*function gerarTabuada(){
    var numero=window.document.getElementById('inNumero');
    if(numero.value==''){
        window.alert('Digite um número para gerar tabuada');
    }else{
        var num=Number(numero.value);
        var tabuada='';
        for(var c=1;c<=10;c++){
            tabuada+=`${num} X ${c} = ${num*c} <br>`;
        }
        window.document.getElementById('outTabuada').style.display="inline-block";
        window.document.getElementById('outTabuada').innerHTML=tabuada;
    }
}*/

function gerarTabuada(){
    let num = window.document.querySelector('input#inNumero')
    let tab = window.document.querySelector('select#tab')
    //Validando a entrada
    if(num.value.length == 0){
        window.alert('Digite um número para gerar tabuada')
        num.focus()
        tab.innerHTML = '<option>Digite um número acima</option>'
    }else{
        //window.alert('Tudo OK!')
        tab.innerHTML = ''
        let n = Number(num.value)
        let c = 0
        while(c <= 10){
            let op = window.document.createElement('option')
            op.setAttribute('value',`op${c}`)
            tab.appendChild(op)
            op.innerHTML = `${n} X ${c} = ${n*c}`
            c++
        }
        num.value = ''
        num.focus()
    }
}