$("#concluir").click(function salvaFuncionario() {
    limparMensagens();
    if ($('#cpf').val() == "" || $('#nome').val() == "" || $('#email').val() == "" || $('#senha').val() == "") {
        $('.invalid').removeClass('hidden');
    }
    else if ($('#email').val() != $('#confirmaEmail').val()) {
        $('.invalid').removeClass('hidden');
    }
    else if ($('#senha').val() != $('#confirmaSenha').val()) {
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
    firebase.database().ref('funcionarios/' + id).remove().then(function () {
        listar();
    });
}

function limparMensagens() {
    $('.invalid').addClass('hidden');
    $('.sucess').addClass('hidden');
}
function limpaCampos() {
    $('#cpf').val("");
    $('#nome').val("");
    $('#sobrenome').val("");
    $('#cidade').val("");
    $('#endereco').val("");
    $('#numero').val("");
    $('#telefone').val("");
    $('#email').val("");
    $('#senha').val("");
    $('#confirmaEmail').val("");
    $('#confirmaSenha').val("");
}
function listar() {
    $("#datatable-checkbox").html("");
    firebase.database().ref('/funcionarios').once('value').then(function (callback) {
        var funcionarios = callback.val();
        for (var key in funcionarios) {
            var cpf = funcionarios[key].cpf;
            var nome = funcionarios[key].nome;
            var email = funcionarios[key].email;
            $("#datatable-checkbox").append("<tr id = '" + key + "'><td>" + cpf + "</td><td>" + nome + "</td><td>" + email + "</td><td><button type='button' id = '" + key + "' onclick='excluir(this.id)' class='btn btn-primary'><span class='glyphicon glyphicon-trash' aria-hidden='true'></span></button> <button type='button' id = '" + key + "' onclick='editar(this.id)'class='btn btn-primary'><span class='glyphicon glyphicon-pencil' aria-hidden='true'></span></button></td></tr> ");
        }
    });
}

listar();


function cadastrar() {
    var Cpf = $('#cpf').val();
    var Nome = $('#nome').val();
    var Sobrenome = $('#sobrenome').val();
    var Cidade = $('#cidade').val();
    var Endereco = $('#endereco').val();
    var Numero = $('#numero').val();
    var Telefone = $('#telefone').val();
    var Email = $('#email').val();
    var Senha = $('#senha').val();

    firebase.database().ref('funcionarios/').push().set({
        cpf: Cpf,
        nome: Nome,
        sobrenome: Sobrenome,
        cidade: Cidade,
        endereco: Endereco,
        numero: Numero,
        telefone: Telefone,
        email: Email,
        senha: Senha
    });
    limpaCampos();
    listar();
}


