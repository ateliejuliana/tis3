function excluir(id) {
    firebase.database().ref('clientes/' + id).remove().then(function () {
        listar();
    });
}

function novo()
{
    $("#conteudo").load("cadastroCliente.html");
}

function editar(id){
    $("#conteudo").load("cadastroCliente.html");
    $('#id').val(id);
    firebase.database().ref('clientes/' + id).once('value').then(function(callback) {
        var keys = callback.val();
        $('#nome').val(keys.nome);
        $('#sobrenome').val(keys.sobrenome);
        $('#telefone').val(keys.telefone);            
    });
}

function listar() {
    $("#datatable-checkbox").html('');
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


