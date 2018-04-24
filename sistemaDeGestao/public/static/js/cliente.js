function cadastrar()
{
    $('.invalid').addClass('hidden');
    if($('#nome').val() == "" || $('#sobrenome').val() == "" || $('#telefone').val() == "")
    {
        $('.invalid').removeClass('hidden');
    }
    else{
    var Nome = $('#nome').val();
    var Sobrenome = $('#sobrenome').val();
    var Telefone = $('#telefone').val();
    firebase.database().ref('clientes/').set({
        nome: Nome,
        sobrenome: Sobrenome,
        telefone : Telefone
      });
    $('.sucess').removeClass('hidden');
    }
}