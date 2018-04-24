

function cadastrar()
{
    var Servico = $('#nomeServico').val();
    var Categoria = $('#categoria').val();
    var Descricao = $('#descricao').val();

    firebase.database().ref('servicos/').set({
        servico: Servico,
        categoria: Categoria,
        descricao : Descricao
      });
}