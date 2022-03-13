var hora = new Date().getHours();

if (hora < 12) {
    alert('Bom dia');
} else if (hora < 18) {
    alert('Boa tarde');
} else {
    alert('Boa noite');
}
var nome = window.prompt('Qual seu nome?');
window.alert('Olá, ' + nome + "!");

var pagina = window.prompt('Você gostou da minha página?');
if ((pagina == "Sim" || pagina == "sim")) {
    window.alert('Oba, então tenho alguma chance!');
    
}
else if ((pagina == "Não" || pagina == "não"))
{
    window.alert('Tudo bem, quem sabe na próxima.');
}

