

function cadastrar()
{
    $('.invalid').addClass('hidden');
    if($('#tipo').val() == "" || $('#descricao').val() == "" || $('#valor').val() == "")
    {
        $('.invalid').removeClass('hidden');
    }
    else{
    var Tipo = $('#tipo').val();
    var Descricao = $('#descricao').val();
    var Valor = $('#valor').val();
    firebase.database().ref('financeiro/').set({
        tipo: Tipo,
        descricao: Descricao,
        valor : Valor
      });
      $('.sucess').removeClass('hidden');
    }
}