var agora = new Date();
var dS = agora.getDay();

/*
    0 - Domingo
    1 - Segunda-Feira
    2 - Terça-Feira
    3 - Quarta-Feira
    4 - Quinta-Feira
    5 - Sexta-Feira
    6 - Sábado
*/

switch(dS){
    case 0:
        console.log("Hoje é domingo");
        break;
    case 1:
        console.log("Hoje é segunda-feira");
        break;
    case 2:
        console.log("Hoje é terça-feira");
        break;
    case 3:
        console.log("Hoje é quarta-feira");
        break;
    case 4:
        console.log("Hoje é quinta-feira");
        break;
    case 5:
        console.log("Hoje é sexta-feira");
        break;
    case 6:
        console.log("Hoje é sábado");
        break;
    default:
        console.log("O valor não corresponde há nenhum dia da semana");
        break;
}