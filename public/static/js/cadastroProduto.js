$("#concluir").click(function salvaCliente() {
    if ($('#nome').val() == "" || $('#valor').val() == "" || $('#quantidade').val() == "") {
        $('.invalid').removeClass('hidden');
    }
    else {
        salvar();
    }
});

$("#cancelar").click(function cancelar() {
    $("#conteudo").load("produto.html");
});


$("#limpar").click(function limpar() {
    $('#nome').val("");
    $('#quantidade').val("");
    $('#tipo').val("");
    $('#valor').val("");
    $('#descricao').val("");
});

function salvar() {
    var Nome = $('#nome').val();
    var Valor = $('#valor').val();
    var Tipo = $('#tipo').val();
    var Quantidade = $('#quantidade').val();
    var Descricao;
    if (Descricao == "") Descricao = "Sem descrição";
    else Descricao = $("#descricao").val();
    var id = $('#id').val();
    if (id == "")
    firebase.database().ref('produtos/').push().set({
        nome: Nome,
        valor: Valor,
        tipo: Tipo,
        quantidade: Quantidade,
        descricao: Descricao
    });
    else
    firebase.database().ref('produtos/'+id).set({
        nome: Nome,
        valor: Valor,
        tipo: Tipo,
        quantidade: Quantidade,
        descricao: Descricao
    });
    $("#conteudo").load("produto.html");
}

