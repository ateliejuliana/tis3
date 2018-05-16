function excluir(id) {
    firebase.database().ref('funcionarios/' + id).remove().then(function () {
        listar();
    });
}

function novo()
{
    $("#conteudo").load("cadastroFuncionarios.html");
}

function editar(id) {
    $("#conteudo").load("cadastroFuncionarios.html");
    $('#id').val(id);
    firebase.database().ref('funcionarios/' + id).once('value').then(function (callback) {
        var keys = callback.val();
        $('#nome').val(keys.nome);
        $('#cidade').val(keys.cidade);
        $('#endereco').val(keys.endereco);
        $('#numero').val(keys.numero);
        $('#telefone').val(keys.telefone);
        $('#email').val(keys.email);
        $('#cpf').val(keys.cpf);
        $('#senha').val(keys.senha);
    });
}

function listar() {
    $("#datatable-checkbox").html('');
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


