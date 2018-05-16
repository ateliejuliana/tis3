
function excluir(id) {
    firebase.database().ref('produtos/' + id).remove().then(function () {
        listar();
    });
}

function novo()
{
    $("#conteudo").load("cadastroProduto.html");
}

function editar(id){
    $("#conteudo").load("cadastroProduto.html");
    $('#id').val(id);
    firebase.database().ref('produtos/' + id).once('value').then(function(callback) {
        var keys = callback.val();
        $('#nome').val(keys.nome);
        $('#valor').val(keys.valor);
        $('#tipo').val(keys.tipo); 
        $('#quantidade').val(keys.quantidade); 
        $('#descricao').val(keys.descricao);            
    });
}

function listar() {
    $("#datatable-checkbox").html('');
    firebase.database().ref('/produtos').once('value').then(function (callback) {
        var produtos = callback.val();
        for (var key in produtos) {
            var nome = produtos[key].nome;
            var valor = produtos[key].valor;
            var tipo = produtos[key].tipo;
            $("#datatable-checkbox").append("<tr id = '" + key + "'><td>" + nome + "</td><td>" + tipo + "</td><td>" + valor + "</td><td><button type='button' id = '" + key + "' onclick='excluir(this.id)' class='btn btn-primary'><span class='glyphicon glyphicon-trash' aria-hidden='true'></span></button> <button type='button' id = '" + key + "' onclick='editar(this.id)'class='btn btn-primary'><span class='glyphicon glyphicon-pencil' aria-hidden='true'></span></button></td></tr> ");
        }
    });
}

listar();
