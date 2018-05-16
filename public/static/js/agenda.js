function selecionarCliente() {
    $("#selectcliente").html('');
    firebase.database().ref('/clientes').once('value').then(function (callback) {
        var vazia = "";
        $("#selectcliente").append("<option value = '" + vazia + "'>" + vazia + "</option>");
        var clientes = callback.val();
        for (var key in clientes) {
            var nome = clientes[key].nome;
            var sobrenome = clientes[key].sobrenome;
            $("#selectcliente").append("<option value = '" + key + "'>" + nome + sobrenome + "</option>");
        }
    });
}
function selecionarServico() {
    $("#selectservico").html('');
    firebase.database().ref('/servicos').once('value').then(function (callback) {
        var servicos = callback.val();
        var vazia = "";
         $("#selectservico").append("<option value = '" + vazia + "'>" + vazia + "</option>");
        for (var key in servicos) {
            var nome = servicos[key].nomeServico;
            $("#selectservico").append("</option><option value = '" + key + "'>" + nome + "</option>");
        }
    });
}

selecionarCliente();
selecionarServico();