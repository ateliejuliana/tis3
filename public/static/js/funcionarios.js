$("#concluir").click(function salvaFuncionario() {
    limparMensagens();
    if ($('#cpf').val() == "" || $('#nome').val() == "" || $('#email').val() == "" || $('#senha').val() == "") {
        $('.invalid').removeClass('hidden');
    }
    if ($('#email').val() != $('#confirmaEmail').val()) {
        $('.invalid').removeClass('hidden');
    }
    if ($('#senha').val() != $('#confirmaSenha').val()) {
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
}
function listar() {
    var database = firebase.database();
    firebase.database().ref('/funcionario').once('value').then(function (callback) {
        var funcionarios = callback.val();
        for (var key in funcionarios) {
            var cpf = funcionarios[key].cpf;
            var nome = funcionarios[key].nome;
            var sobrenome = funcionarios[key].spbrenome;
            var cidade = funcionarios[key].cidade;
            var endereco = funcionarios[key].endereco;
            var numero = funcionarios[key].numero;
            var telefone = funcionarios[key].telefone;
            var email = funcionarios[key].email;
            var senha = funcionarios[key].senha;
            $("#funcionarios").append("<div class='col-md-6 col-xs-12'> <div class='x_panel'> <div class='x_title'> <h2>Funcionario</h2> <div class='clearfix'></div> </div> <div class='x_content'> <br/> <form class='form-horizontal form-label-left input_mask'> <div class='form-group'> <label class='control-label col-md-3 col-sm-3 col-xs-12'>CPF</label> <div class='col-md-9 col-sm-9 col-xs-12'> <input type='text' class='form-control' disabled='disabled' placeholder='" + cpf + "'> </div> </div> <div class='form-group'> <label class='control-label col-md-3 col-sm-3 col-xs-12'>Nome</label> <div class='col-md-9 col-sm-9 col-xs-12'> <input type='text' class='form-control' readonly='readonly' placeholder='" + nome + "'> </div> </div> <div class='form-group'> <label class='control-label col-md-3 col-sm-3 col-xs-12'>Sobrenome</label> <div class='col-md-9 col-sm-9 col-xs-12'> <input type='text' class='form-control' readonly='readonly' placeholder='" + sobrenome + "'> </div> </div> <div class='form-group'> <label class='control-label col-md-3 col-sm-3 col-xs-12'>Cidade</label> <div class='col-md-9 col-sm-9 col-xs-12'> <input type='text' class='form-control' disabled='disabled' placeholder='" + cidade + "'> </div> </div> <div class='form-group'> <label class='control-label col-md-3 col-sm-3 col-xs-12'>Endereço</label> <div class='col-md-9 col-sm-9 col-xs-12'> <input type='text' class='form-control' disabled='disabled' placeholder='" + endereco + "'> </div> </div> <div class='form-group'> <label class='control-label col-md-3 col-sm-3 col-xs-12'>Numero</label> <div class='col-md-9 col-sm-9 col-xs-12'> <input type='text' class='form-control' disabled='disabled' placeholder='" + numero + "'> </div> </div><div class='form-group'> <label class='control-label col-md-3 col-sm-3 col-xs-12'>Telefone</label> <div class='col-md-9 col-sm-9 col-xs-12'> <input type='text' class='form-control' disabled='disabled' placeholder='" + telefone + "'> </div> </div><div class='form-group'> <label class='control-label col-md-3 col-sm-3 col-xs-12'>Email</label> <div class='col-md-9 col-sm-9 col-xs-12'> <input type='text' class='form-control' disabled='disabled' placeholder='" + email + "'> </div> </div> </form> </div> </div> </div>");
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

    firebase.database().ref('funcionario/').push().set({
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
    $("#funcionarios").html("");
    listar();
}


