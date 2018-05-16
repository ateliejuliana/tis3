function excluir(id) {
    firebase.database().ref('financeiro/' + id).remove().then(function () {
        listar();
    });
}

function novo()
{
    $("#conteudo").load("cadastroFinanceiro.html");
}

function editar(id){
    $("#conteudo").load("cadastroFinanceiro.html");
    $('#id').val(id);
    firebase.database().ref('financeiro/' + id).once('value').then(function(callback) {
        var keys = callback.val();
        $('#tipo').val(keys.tipo);
        $('#descricao').val(keys.descricao);
        $('#valor').val(keys.valor);            
    });
}

function listar() {
    $("#datatable-checkbox").html('');
    firebase.database().ref('/financeiro').once('value').then(function (callback) {
        var financeiro = callback.val();
        for (var key in financeiro) {
            var tipo = financeiro[key].tipo;
            var descricao = financeiro[key].descricao;
            var valor = financeiro[key].valor;
            $("#datatable-checkbox").append("<tr id = '" + key + "'><td>" + tipo + "</td><td>" + descricao + "</td><td>" + valor + "</td><td><button type='button' id = '" + key + "' onclick='excluir(this.id)' class='btn btn-primary'><span class='glyphicon glyphicon-trash' aria-hidden='true'></span></button> <button type='button' id = '" + key + "' onclick='editar(this.id)'class='btn btn-primary'><span class='glyphicon glyphicon-pencil' aria-hidden='true'></span></button></td></tr> ");
        }
    });
}

listar();
