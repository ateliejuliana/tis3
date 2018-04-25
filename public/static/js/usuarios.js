function cadastrar()
{
   
    var Nome = $('#firstName').val();
    var Sobrenome = $('#lastName').val();
    var Email = $('#email').val();
    var Senha = $('#password').val() ;
    
    firebase.database().ref('usuarios/').set({
        nome: Nome,
        sobrenome: Sobrenome,
        email : Email,
        senha : Senha
    });
}