var hora = new Date().getHours();

if (hora < 12) {
    alert('Bom dia');
} else if (hora < 18) {
    alert('Boa tarde');
} else {
    alert('Boa noite');
}

var nome = window.prompt('Qual é seu nome?')
window.alert('Tenha um bom dia, ' + nome + '!')


window.confirm("Você gostou da página?")
