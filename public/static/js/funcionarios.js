function cadastrar() {
    $('.invalid').addClass('hidden');
    if ($('#cpf').val() == "" || $('#nome').val() == "" || $('#email').val() == "" || $('#senha').val() == "") {
        $('.invalid').removeClass('hidden');
    }
    if ($('#email').val() != $('#confirmaEmail').val()) {
        $('.invalid').removeClass('hidden');
    }
    if ($('#senha').val() != $('#confirmaSenha').val()) {
        $('.invalid').removeClass('hidden');
    } else {
        var Cpf = $('#cpf').val();
        var Nome = $('#nome').val();
        var Sobrenome = $('#sobrenome').val();
        var Cidade = $('#cidade').val();
        var Endereco = $('#endereco').val();
        var Numero = $('#numero').val();
        var Telefone = $('#telefone').val();
        var Email = $('#email').val();
        var Senha = $('#senha').val();

        firebase.database().ref('funcionario/').set({
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

        $('.sucess').removeClass('hidden');
    }
}
