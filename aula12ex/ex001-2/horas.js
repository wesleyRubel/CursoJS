function carregar(){
    //Pegando a data e hora do sistema
    var data = new Date()
    var horas = data.getHours()
    var min = data.getMinutes()
    var msg = window.document.getElementById('horas')
    var img = window.document.querySelector('div#imagem')
    msg.innerHTML=`Agora são ${horas} horas e ${min} minutos`
    msg.style.fontWeight="bold"
    //Criando um elemento
    var foto = window.document.createElement('img')
    foto.setAttribute('alt','periodo do dia')
    if(horas >= 0 && horas < 13){ //Bom dia
        window.document.getElementsByTagName('body')[0].style.backgroundColor="#BEB58A"
        //Adicionando um atributo ao elemento criado
        foto.setAttribute('src','./imagens/manha.png')
        //Incluindo o elemento criado dentro de outro
        img.appendChild(foto)
    }else if(horas < 19){ //Boa tarde
        window.document.getElementsByTagName('body')[0].style.backgroundColor="#8E5937"
        foto.setAttribute('src','./imagens/tarde.png')
        img.appendChild(foto)
    }else if(horas <= 23){ //Boa noite
        window.document.getElementsByTagName('body')[0].style.backgroundColor="#342741"
        foto.setAttribute('src','./imagens/noite.png')
        img.appendChild(foto)
    } 
}