function excluir(id) {
    firebase.database().ref('fornecedores/' + id).remove().then(function () {
        listar();
    });
}

function novo() {
    $("#conteudo").load("cadastroFornecedor.html");
}

function editar(id) {
    $("#conteudo").load("cadastroFornecedor.html");
    $('#id').val(id);
    firebase.database().ref('fornecedores/' + id).once('value').then(function (callback) {
        var keys = callback.val();
        $('#cnpj').val(keys.cnpj);
        $('#nome').val(keys.nome);
        $('#cep').val(keys.cep);
        $('#estado').val(keys.estado);
        $('#cidade').val(keys.cidade);
        $('#endereco').val(keys.endereco);
        $('#numero').val(keys.numero);
        $('#telefone').val(keys.telefone);
        $('#email').val(keys.email);
        $('#tipo').val(keys.tipo);
    });
}


function listar() {
    $("#datatable-checkbox").html('');
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

