var agora = new Date();
var horas = agora.getHours();
var min = agora.getMinutes();

console.log(`Agora são ${horas} horas e ${min} minutos`);
if(horas >= 0 && horas < 6 ){
    console.log('Boa madrugada!');
}else if(horas < 13){
    console.log('Bom dia!');
}else if(horas < 18){
    console.log('Boa tarde!');
}else{
    console.log('Boa noite!');
}