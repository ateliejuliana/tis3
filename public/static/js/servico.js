function listar() {
    $("#datatable-checkbox").html('');
    firebase.database().ref('/servicos').once('value').then(function (callback) {
        var servicos = callback.val();
        for (var key in servicos) {
            var nome = servicos[key].nomeServico;
            var categoria = servicos[key].categoria;
            var descricao = servicos[key].descricao;
            $("#datatable-checkbox").append("<tr id = '" + key + "'><td>" + nome + "</td><td>" + categoria + "</td><td>" + descricao + "</td><td><button type='button' id = '" + key + "' onclick='excluir(this.id)' class='btn btn-primary'><span class='glyphicon glyphicon-trash' aria-hidden='true'></span></button> <button type='button' id = '" + key + "' onclick='editar(this.id)'class='btn btn-primary'><span class='glyphicon glyphicon-pencil' aria-hidden='true'></span></button></td></tr> ");
        }
    });
}

listar();

function editar(id){
    $("#conteudo").load("cadastroServico.html");
    $('#id').val(id);
    firebase.database().ref('servicos/' + id).once('value').then(function(callback) {
        var keys = callback.val();
        $('#nome').val(keys.nome);
        $('#categoria').val(keys.categoria);
        $('#descricao').val(keys.descricao);            
    });
}

function excluir(id) {
    firebase.database().ref('servicos/' + id).remove().then(function () {
        $('#datatable-checkbox').html("");
        listar();
    });
}

function novo()
{
    $("#conteudo").load("cadastroServico.html");
}