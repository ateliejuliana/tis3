$("#concluir").click(function salvaOperacao() {
    if ($('#tipo').val() == "" || $('#descricao').val() == "" || $('#valor').val() == "") {
        $('.invalid').removeClass('hidden');
    }
    else {
        salvar();
    }
});


$("#cancelar").click(function cancelar() {
    $("#conteudo").load("financeiro.html");
});


$("#limpar").click(function limpar() {
    $('#tipo').val("");
    $('#descricao').val("");
    $('#valor').val("");
});

function salvar() {
    var Tipo = $('#tipo').val();
    var Descricao = $('#descricao').val();
    var Valor = $('#valor').val();
    var id = $('#id').val();
    if (id == "")
    firebase.database().ref('financeiro/').push().set({
        tipo: Tipo,
        descricao: Descricao,
        valor: Valor
    });
    else
    firebase.database().ref('financeiro/'+id).set({
        tipo: Tipo,
        descricao: Descricao,
        valor: Valor
    });
    $("#conteudo").load("financeiro.html");
}