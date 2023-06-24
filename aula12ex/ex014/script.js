function carregar() {
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('img#imagem')
    var data = new Date()
    var horas = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML=`Agora são ${horas} horas e ${min} minutos`
    msg.style.fontWeight="bold"
    if(horas >= 0 && horas < 12){
        //Bom dia
        img.src='./imagens/manha.png'
        window.document.body.style.backgroundColor="#e2cd9f"
    }else if(horas < 19){
        //Boa tarde
        img.src='./imagens/tarde.png'
        window.document.body.style.backgroundColor="#b9846f"
    }else{
        //Boa noite
        img.src='./imagens/noite.png'
        window.document.body.style.backgroundColor="#515154"
    }
}
