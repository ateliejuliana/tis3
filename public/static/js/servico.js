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
    var database = firebase.database();
    firebase.database().ref('/servicos').once('value').then(function (callback) {
        var servicos = callback.val();
        for (var key in servicos) {
            var nomeServico = servicos[key].nomeServico;
            var categoria = servicos[key].categoria;
            var descricao = servicos[key].descricao;
            $("#servicos").append("<div class='col-md-6 col-xs-12'> <div class='x_panel'> <div class='x_title'> <h2>Serviço</h2> <div class='clearfix'></div> </div> <div class='x_content'> <br/> <form class='form-horizontal form-label-left input_mask'> <div class='form-group'> <label class='control-label col-md-3 col-sm-3 col-xs-12'>Nome</label> <div class='col-md-9 col-sm-9 col-xs-12'> <input type='text' class='form-control' disabled='disabled' placeholder='" + nomeServico + "'> </div> </div> <div class='form-group'> <label class='control-label col-md-3 col-sm-3 col-xs-12'>Categoria</label> <div class='col-md-9 col-sm-9 col-xs-12'> <input type='text' class='form-control' readonly='readonly' placeholder='" + categoria + "'> </div> </div> <div class='form-group'> <label class='control-label col-md-3 col-sm-3 col-xs-12'>Descrição</label> <div class='col-md-9 col-sm-9 col-xs-12'> <input type='text' class='form-control' readonly='readonly' placeholder='" + descricao + "'> </div> </div> </form> </div> </div> </div>");
        }
    });
}

listar();


function cadastrar() {
    var nome = $("#nomeServico").val();
    var categoria = $("#categoria").val();
    var descricao = $("#descricao").val();
    firebase.database().ref('servicos/').push().set({
        categoria: categoria,
        descricao: descricao,
        nomeServico: nome
    });
    limpaCampos();
    $("#servicos").html("");
    listar();
}

