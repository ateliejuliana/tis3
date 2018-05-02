$("#concluir").click(function salvaOperacao() {
    limparMensagens();
    if ($('#tipo').val() == "" || $('#descricao').val() == "" || $('#valor').val() == "") {
        $('.invalid').removeClass('hidden');
    }
    else {
        cadastrar();
        $('.sucess').removeClass('hidden');
    }
});

function limparMensagens() {
    $('.invalid').addClass('hidden');
    $('.sucess').addClass('hidden');
}

$("#cancelar").click(function cancelar() {
    limparMensagens();
    limpaCampos();
});

function limpaCampos() {
    $('#tipo').val("");
    $('#descricao').val("");
    $('#valor').val("");
}
function listar() {
    var database = firebase.database();
    firebase.database().ref('/financeiro').once('value').then(function (callback) {
        var financeiro = callback.val();
        for (var key in financeiro) {
            var tipo = financeiro[key].tipo;
            var descricao = financeiro[key].descricao;
            var valor = financeiro[key].valor;
            $("#financeiro").append("<div class='col-md-6 col-xs-12'> <div class='x_panel'> <div class='x_title'> <h2>Operação</h2> <div class='clearfix'></div> </div> <div class='x_content'> <br/> <form class='form-horizontal form-label-left input_mask'> <div class='form-group'> <label class='control-label col-md-3 col-sm-3 col-xs-12'>Tipo</label> <div class='col-md-9 col-sm-9 col-xs-12'> <input type='text' class='form-control' disabled='disabled' placeholder='" + tipo + "'> </div> </div> <div class='form-group'> <label class='control-label col-md-3 col-sm-3 col-xs-12'>Descrição</label> <div class='col-md-9 col-sm-9 col-xs-12'> <input type='text' class='form-control' readonly='readonly' placeholder='" + descricao + "'> </div> </div> <div class='form-group'> <label class='control-label col-md-3 col-sm-3 col-xs-12'>Valor</label> <div class='col-md-9 col-sm-9 col-xs-12'> <input type='text' class='form-control' readonly='readonly' placeholder='" + valor + "'> </div> </div> </form> </div> </div> </div>");
        }
    });
}

listar();


function cadastrar() {
    var Tipo = $('#tipo').val();
    var Descricao = $('#descricao').val();
    var Valor = $('#valor').val();
    firebase.database().ref('financeiro/').push().set({
        tipo: Tipo,
        descricao: Descricao,
        valor: Valor
    });
    limpaCampos();
    $("#financeiro").html("");
    listar();
}