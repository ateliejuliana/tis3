$("#concluir").click(function salvaServicos() {
    if ($('#nomeServico').val() == "" || $('#categoria').val() == "" || $('#descricao').val() == "") {
        $('.invalid').removeClass('hidden');
    }
    else {
        salvar();
    }
});

$("#cancelar").click(function cancelar() {
    $("#conteudo").load("servico.html");
});



$("#limpar").click(function limpar() {
    $("#nomeServico").val("");
    $("#categoria").val("");
    $("#descricao").val("");
});

function salvar() {
    var nome = $("#nomeServico").val();
    var categoria = $("#categoria").val();
    var descricao;
    if (descricao == "") descricao = "Sem descrição";
    else descricao = $("#descricao").val();
    var id = $('#id').val();
    if (id == "")
    firebase.database().ref('servicos/').push().set({
        categoria: categoria,
        descricao: descricao,
        nomeServico: nome
    });
    else
    firebase.database().ref('servicos/'+id).set({
        categoria: categoria,
        descricao: descricao,
        nomeServico: nome
    });
    $("#conteudo").load("servico.html");
}

