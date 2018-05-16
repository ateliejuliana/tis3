$("#concluir").click(function salvaFuncionario() {
    if ($('#cnpj').val() == "" || $('#nome').val() == "" || $('#email').val() == "" || $('#cep').val() == "" || $('#tipo').val() == "") {
        $('.invalid').removeClass('hidden');
    } else 
        salvar();
});

$("#cancelar").click(function cancelar() {
    $("#conteudo").load("fornecedor.html");
});




$("#limpar").click(function limpar() {
    $('#cnpj').val("");
    $('#nome').val("");
    $('#cep').val("");
    $('#estado').val("");
    $('#cidade').val("");
    $('#endereco').val("");
    $('#numero').val("");
    $('#telefone').val("");
    $('#email').val("");
    $('#tipo').val("");
});




function salvar() {
    var Cnpj = $('#cnpj').val();
    var Nome = $('#nome').val();
    var CEP = $('#cep').val();
    var Estado = $('#estado').val();
    var Cidade = $('#cidade').val();
    var Endereco = $('#endereco').val();
    var Numero = $('#numero').val();
    var Telefone = $('#telefone').val();
    var Email = $('#email').val();
    var Tipo = $('#tipo').val();
    var id = $('#id').val();
    if (id == "")
    firebase.database().ref('fornecedores/').push().set({
        cnpj: Cnpj,
        nome: Nome,
        cep: CEP,
        estado: Estado,
        cidade: Cidade,
        endereco: Endereco,
        numero: Numero,
        telefone: Telefone,
        email: Email,
        tipo: Tipo
    });
    else
    firebase.database().ref('fornecedores/'+id).set({
        cnpj: Cnpj,
        nome: Nome,
        cep: CEP,
        estado: Estado,
        cidade: Cidade,
        endereco: Endereco,
        numero: Numero,
        telefone: Telefone,
        email: Email,
        tipo: Tipo
    });
    $("#conteudo").load("fornecedor.html");
}


