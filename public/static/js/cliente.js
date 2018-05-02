$("#concluir").click(function salvaCliente() {
    limparMensagens();
    if ($('#nome').val() == "" || $('#sobrenome').val() == "" || $('#telefone').val() == "") {
        $('.invalid').removeClass('hidden');
    }
    else {
        cadastrar();
        $('.sucess').removeClass('hidden');
    }
});

$("#cancelar").click(function cancelar() {
    limparMensagens();
    limpaCampos();
});

function limparMensagens() {
    $('.invalid').addClass('hidden');
    $('.sucess').addClass('hidden');
}

function excluir(id) {
    var database = firebase.database();
    firebase.database().ref('clientes/' + id).remove().then(function () {
        $('#datatable-checkbox').html("");
        listar();
    });
}

function limpaCampos() {
    $('#nome').val("");
    $('#sobrenome').val("");
    $('#telefone').val("");
}
function listar() {
    var database = firebase.database();
    firebase.database().ref('/clientes').once('value').then(function (callback) {
        var clientes = callback.val();
        for (var key in clientes) {
            var nome = clientes[key].nome;
            var sobrenome = clientes[key].sobrenome;
            var telefone = clientes[key].telefone;
            $("#datatable-checkbox").append("<tr id = '" + key + "'><td>" + nome + "</td><td>" + sobrenome + "</td><td>" + telefone + "</td><td><button type='button' id = '" + key + "' onclick='excluir(this.id)' class='btn btn-primary'><span class='glyphicon glyphicon-trash' aria-hidden='true'></span></button> <button type='button' id = '" + key + "' onclick='editar(this.id)'class='btn btn-primary'><span class='glyphicon glyphicon-pencil' aria-hidden='true'></span></button></td></tr> ");
        }
    });
}

listar();

function cadastrar() {
    var Nome = $('#nome').val();
    var Sobrenome = $('#sobrenome').val();
    var Telefone = $('#telefone').val();
    firebase.database().ref('clientes/').push().set({
        nome: Nome,
        sobrenome: Sobrenome,
        telefone: Telefone
    });
    limpaCampos();
    $("#datatable-checkbox").html("");
    listar();
}

