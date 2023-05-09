function carregar(){
    var msg=window.document.getElementById('msg');
    var img=window.document.getElementById('imagem');
    var data=new Date();
    var hora=data.getHours();
    //var hora=15;
    var min=data.getMinutes();
    msg.innerHTML=`Agora são ${hora} horas e ${min} minutos`;
    if(hora>=0 && hora<12){
        //Bom dia
        img.src='imagens/manha.png';
        //window.document.getElementsByTagName('body')[0].style.backgroundColor="#BEB58A";
        document.body.style.backgroundColor="#BEB58A";
    }else if(hora>=12 && hora<18){
        //Boa tarde
        img.src='imagens/tarde.png';
        window.document.body.style.backgroundColor="#8E5937";
    }else{
        //Boa noite
        img.src='imagens/noite.png';
        window.document.body.style.backgroundColor="#342741";
    }
}