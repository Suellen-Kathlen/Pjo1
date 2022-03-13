
var a = window.document.getElementById('botom')

function entrar() {
    var a = window.document.getElementById('botom')
    a.innerText = 'We can help you!'
}
function sair() {
    var a = window.document.getElementById('botom')
    a.innerText = 'Hire now'
}

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

var pagina = window.prompt('Você quer conhecer minha página? \n \n Responda com Sim/sim ou Não/não.');
if ((pagina == "Sim" || pagina == "sim")) {
    window.alert('Oba, então vamos lá!');

}
else if ((pagina == "Não" || pagina == "não")) {
    window.alert('Tudo bem, quem sabe na próxima.');
}





