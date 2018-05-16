$("#concluir").click(function salvaFuncionario() {
    if ($('#cpf').val() == "" || $('#nome').val() == "" || $('#email').val() == "" || $('#senha').val() == "") {
        $('.invalid').removeClass('hidden');
    }
    else if ($('#email').val() != $('#confirmaEmail').val()) {
        $('.invalid').removeClass('hidden');
    }
    else if ($('#senha').val() != $('#confirmaSenha').val()) {
        $('.invalid').removeClass('hidden');
    } else {
        salvar();
    }
});

$("#cancelar").click(function cancelar() {
    $("#conteudo").load("funcionario.html");
});

$("#limpar").click(function limpar() {
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
});




function salvar() {
    var Cpf = $('#cpf').val();
    var Nome = $('#nome').val();
    var Sobrenome = $('#sobrenome').val();
    var Cidade = $('#cidade').val();
    var Endereco = $('#endereco').val();
    var Numero = $('#numero').val();
    var Telefone = $('#telefone').val();
    var Email = $('#email').val();
    var Senha = $('#senha').val();
    var id = $('#id').val();
    if (id == "")
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
    else
    firebase.database().ref('funcionarios/'+id).set({
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
    $("#conteudo").load("funcionario.html");
}


