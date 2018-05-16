$("#concluir").click(function salvaCliente() {
    if ($('#nome').val() == "" || $('#sobrenome').val() == "" || $('#telefone').val() == "") {
        $('.invalid').removeClass('hidden');
    }
    else {
        salvar();
    }
});

function reload()
{
    $("#conteudo").load("cliente.html");
}

$("#cancelar").click(function cancelar() {
    $("#conteudo").load("cliente.html");
});


$("#limpar").click(function limpar() {
    $('#nome').val("");
    $('#sobrenome').val("");
    $('#telefone').val("");
});

function salvar() {
    debugger;
    var Nome = $('#nome').val();
    var Sobrenome = $('#sobrenome').val();
    var Telefone = $('#telefone').val();
    var id = $('#id').val();
    if (id == "")
        firebase.database().ref('clientes/').push().set({
            nome: Nome,
            sobrenome: Sobrenome,
            telefone: Telefone
        });
    else
        firebase.database().ref('clientes/' + id).set({
            nome: Nome,
            sobrenome: Sobrenome,
            telefone: Telefone
        });
    $("#conteudo").load("cliente.html");
}

