$("#concluir").click(function salvaOperacao() {
    limparMensagens();
    if ($('#tipo').val() == "" || $('#descricao').val() == "" || $('#valor').val() == "") {
        $('.invalid').removeClass('hidden');
    }
    else {
        cadastrar();
        $('.sucess').removeClass('hidden');
    }
});

function limparMensagens() {
    $('.invalid').addClass('hidden');
    $('.sucess').addClass('hidden');
}

$("#cancelar").click(function cancelar() {
    limparMensagens();
    limpaCampos();
});

function excluir(id) {
    var database = firebase.database();
    firebase.database().ref('financeiro/' + id).remove().then(function () {
        $('#datatable-checkbox').html("");
        listar();
    });
}

function limpaCampos() {
    $('#tipo').val("");
    $('#descricao').val("");
    $('#valor').val("");
}
function listar() {
    var database = firebase.database();
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


function cadastrar() {
    var Tipo = $('#tipo').val();
    var Descricao = $('#descricao').val();
    var Valor = $('#valor').val();
    firebase.database().ref('financeiro/').push().set({
        tipo: Tipo,
        descricao: Descricao,
        valor: Valor
    });
    limpaCampos();
    $("#datatable-checkbox").html("");
    listar();
}