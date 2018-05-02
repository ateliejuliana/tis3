$("#concluir").click(function salvaServicos() {
    limparMensagens();
    if ($('#nomeServico').val() == "" || $('#categoria').val() == "" || $('#descricao').val() == "") {
        $('.invalid').removeClass('hidden');
    }
    else {
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
    $("#nomeServico").val("");
    $("#categoria").val("");
    $("#descricao").val("");
}
function listar() {
    $("#datatable-checkbox").html("");
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

function excluir(id) {
    firebase.database().ref('servicos/' + id).remove().then(function () {
        $('#datatable-checkbox').html("");
        listar();
    });
}

function cadastrar() {
    var nome = $("#nomeServico").val();
    var categoria = $("#categoria").val();
    var descricao;
    if (descricao == "") descricao = "Sem descrição";
    else descricao = $("#descricao").val();
    firebase.database().ref('servicos/').push().set({
        categoria: categoria,
        descricao: descricao,
        nomeServico: nome
    });
    limpaCampos();
    listar();
}

