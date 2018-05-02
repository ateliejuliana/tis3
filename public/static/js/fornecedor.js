$("#concluir").click(function salvaFuncionario() {
    limparMensagens();
    if ($('#cnpj').val() == "" || $('#nome').val() == "" || $('#email').val() == "" || $('#cep').val() == "" || $('#tipo').val() == "") {
        $('.invalid').removeClass('hidden');
    } else {
        cadastrar();
        $('.sucess').removeClass('hidden');
    }
});

$("#cancelar").click(function cancelar() {
    limparMensagens();
    limpaCampos();
});

function excluir(id) {
    var database = firebase.database();
    firebase.database().ref('fornecedores/' + id).remove().then(function () {
        $('#datatable-checkbox').html("");
        listar();
    });
}

function limparMensagens() {
    $('.invalid').addClass('hidden');
    $('.sucess').addClass('hidden');
}


function limpaCampos() {
    $('#cnpj').val("");
    $('#nome').val("");
    $('#cep').val("");
    $('#estado').val("");
    $('#cidade').val("");
    $('#endereco').val("");
    $('#numero').val("");
    $('#telefone').val("");
    $('#email').val("");
    $('#tipo').val("");
}
function listar() {
    var database = firebase.database();
    firebase.database().ref('/fornecedores').once('value').then(function (callback) {
        var fornecedores = callback.val();
        for (var key in fornecedores) {
            var cnpj = fornecedores[key].cnpj;
            var nome = fornecedores[key].nome;
            var tipo = fornecedores[key].tipo;
            $("#datatable-checkbox").append("<tr id = '" + key + "'><td>" + cnpj + "</td><td>" + nome + "</td><td>" + tipo + "</td><td><button type='button' id = '" + key + "' onclick='excluir(this.id)' class='btn btn-primary'><span class='glyphicon glyphicon-trash' aria-hidden='true'></span></button> <button type='button' id = '" + key + "' onclick='editar(this.id)'class='btn btn-primary'><span class='glyphicon glyphicon-pencil' aria-hidden='true'></span></button></td></tr> ");
        }
    });
}

listar();

function cadastrar() {
    var Cnpj = $('#cnpj').val();
    var Nome = $('#nome').val();
    var CEP = $('#cep').val();
    var Estado = $('#estado').val();
    var Cidade = $('#cidade').val();
    var Endereco = $('#endereco').val();
    var Numero = $('#numero').val();
    var Telefone = $('#telefone').val();
    var Email = $('#email').val();
    var Tipo = $('#tipo').val();

    firebase.database().ref('fornecedores/').push().set({
        cnpj: Cnpj,
        nome: Nome,
        cep: CEP,
        estado: Estado,
        cidade: Cidade,
        endereco: Endereco,
        numero: Numero,
        telefone: Telefone,
        email: Email,
        tipo: Tipo
    });
    limpaCampos();
    $("#datatable-checkbox").html("");
    listar();
}


