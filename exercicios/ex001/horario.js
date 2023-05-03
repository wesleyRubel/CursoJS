var agora=new Date();
var horas=agora.getHours();
var minutos=agora.getMinutes();

/*var horas=Number(prompt('Informe a hora atual'));*/

if(horas>=0 && horas<=5){
    window.document.getElementById('outBackground').style.backgroundColor="#142540";
    window.document.querySelector('h3#outHora').innerHTML=`Agora são ${horas} horas e ${minutos} minutos`;
    window.document.getElementById('outImage').style.background="url(./imagens/madrugada-200.jpg) center center no-repeat";
    window.document.getElementById('outImage').style.backgroundSize="cover";        
}
else if(horas>=6 && horas<=12){
    window.document.getElementById('outBackground').style.backgroundColor="#FFC45E";
    window.document.querySelector('h3#outHora').innerHTML=`Agora são ${horas} horas e ${minutos} minutos`;
    window.document.getElementById('outImage').style.background="url(./imagens/Amanhecer-200.jpg) center center no-repeat";
    window.document.getElementById('outImage').style.backgroundSize="cover";
}else if(horas>12 && horas<=18){
    window.document.getElementById('outBackground').style.backgroundColor="#E86A51";
    window.document.querySelector('h3#outHora').innerHTML=`Agora são ${horas} horas e ${minutos} minutos`;
    window.document.getElementById('outImage').style.background="url(./imagens/entardecer-200.jpg) center center no-repeat";
    window.document.getElementById('outImage').style.backgroundSize="cover";    
}else{
    window.document.getElementById('outBackground').style.backgroundColor="#142540";
    window.document.querySelector('h3#outHora').innerHTML=`Agora são ${horas} horas e ${minutos} minutos`;
    window.document.getElementById('outImage').style.background="url(./imagens/anoitecer-200.webp) center center no-repeat";
    window.document.getElementById('outImage').style.backgroundSize="cover";       
}