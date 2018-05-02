$("#concluir").click(function salvaCliente() {
    limparMensagens();
    if ($('#nome').val() == "" || $('#valor').val() == "" || $('#quantidade').val() == "") {
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

function excluir(id) {
    firebase.database().ref('produtos/' + id).remove().then(function () {
        listar();
    });
}

function limpaCampos() {
    $('#nome').val("");
    $('#quantidade').val("");
    $('#tipo').val("");
    $('#valor').val("");
    $('#descricao').val("");
}
function listar() {
    $("#datatable-checkbox").html("");
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

function cadastrar() {
    var Nome = $('#nome').val();
    var Valor = $('#valor').val();
    var Tipo = $('#tipo').val();
    var Quantidade = $('#quantidade').val();
    var Descricao;
    if (Descricao == "") Descricao = "Sem descrição";
    else Descricao = $("#descricao").val();
    firebase.database().ref('produtos/').push().set({
        nome: Nome,
        valor: Valor,
        tipo: Tipo,
        quantidade: Quantidade,
        descricao: Descricao
    });
    limpaCampos();
    listar();
}

