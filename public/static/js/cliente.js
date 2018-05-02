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


function limpaCampos() {
    $('#nome').val("");
    $('#sobrenome').val("");
    $('#telefone').val("");
}
function listar() {
    var database = firebase.database();
    firebase.database().ref('/clientes').once('value').then(function (callback) {
        var clientes = callback.val();
        debugger;
        for (var key in clientes) {
            var nome = clientes[key].nome;
            var sobrenome = clientes[key].sobrenome;
            var telefone = clientes[key].telefone;
            $("#clientes").append("<div class='col-md-6 col-xs-12'> <div class='x_panel'> <div class='x_title'> <h2>Cliente</h2> <div class='clearfix'></div> </div> <div class='x_content'> <br/> <form class='form-horizontal form-label-left input_mask'> <div class='form-group'> <label class='control-label col-md-3 col-sm-3 col-xs-12'>Nome</label> <div class='col-md-9 col-sm-9 col-xs-12'> <input type='text' class='form-control' disabled='disabled' placeholder='" + nome + "'> </div> </div> <div class='form-group'> <label class='control-label col-md-3 col-sm-3 col-xs-12'>Sobrenome</label> <div class='col-md-9 col-sm-9 col-xs-12'> <input type='text' class='form-control' readonly='readonly' placeholder='" + sobrenome + "'> </div> </div> <div class='form-group'> <label class='control-label col-md-3 col-sm-3 col-xs-12'>Telefone</label> <div class='col-md-9 col-sm-9 col-xs-12'> <input type='text' class='form-control' readonly='readonly' placeholder='" + telefone + "'> </div> </div> </form> </div> </div> </div>");
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
    $("#clientes").html("");
    listar();
}

