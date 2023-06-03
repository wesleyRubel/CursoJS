function tabuada(){
    var num=document.getElementById('inNumero');
    var tab=document.getElementById('selTabuada');
    if(num.value.length == 0){
        window.alert('Por favor, digite um número!');
    }else{
        var n=Number(num.value);
        var c=1;
        tab.innerHTML=' ';
        //document.getElementById('op').style.display="none";
        while (c<=10) {
            var item=document.createElement('option'); 
            item.text=`${n} X ${c} = ${n*c}`;  
            item.value=`tab${c}`; 
            tab.appendChild(item);
            c++;
        }
    }
}

var bt=document.getElementById('btGerar');
bt.addEventListener('click',tabuada);
