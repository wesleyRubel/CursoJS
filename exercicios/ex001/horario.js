/*#F2BF5E - Manhã
#D78040 - Tarde
#362D4C - Noite
#233eff - Padrão
*/

function carregar(){
    var data=new Date();
    var horas=data.getHours();
   // var horas=20;
    var min=data.getMinutes();
    var outHoras=window.document.getElementById('outHora');
    var outImage=window.document.getElementById('outImage');
    outHoras.style.marginTop="10px";
    outHoras.innerHTML=`Agora são ${horas} horas e ${min} minutos`;
    if(horas>=0 && horas<12){
        window.document.getElementsByTagName('body')[0].style.backgroundColor="#F2BF5E";
        var bDia=document.createElement('p');
        var foto=document.createElement('img');
        foto.setAttribute('src','imagens/amanhecer.png');
        foto.setAttribute('alt','Amanhecer');
        bDia.innerHTML="Bom dia!";
        bDia.style.textAlign="center";
        bDia.style.fontWeight="bold";
        bDia.style.marginBottom="10px";
        window.document.getElementsByTagName('section')[0].appendChild(bDia);
        outImage.appendChild(foto);
    }else if(horas<19){
        window.document.getElementsByTagName('body')[0].style.backgroundColor="#D78040";
        var bDia=document.createElement('p');
        var foto=document.createElement('img');
        foto.setAttribute('src','imagens/entardecer.png');
        foto.setAttribute('alt','Entardecer');
        bDia.innerHTML="Boa Tarde!";
        bDia.style.textAlign="center";
        bDia.style.fontWeight="bold";
        bDia.style.marginBottom="10px";
        window.document.getElementsByTagName('section')[0].appendChild(bDia);
        outImage.appendChild(foto);
    }else{
        window.document.getElementsByTagName('body')[0].style.backgroundColor="#362D4C";
        var bDia=document.createElement('p');
        var foto=document.createElement('img');
        foto.setAttribute('src','imagens/anoitecer.png');
        foto.setAttribute('alt','Anoitecer');
        bDia.innerHTML="Boa Noite!";
        bDia.style.textAlign="center";
        bDia.style.fontWeight="bold";
        bDia.style.marginBottom="10px";
        window.document.getElementsByTagName('section')[0].appendChild(bDia);
        outImage.appendChild(foto);    
    }
}