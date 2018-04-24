function paginaCarregada() {

    var email = "fabio@gmail.com";


    //animação inicial (opacidade e login aparecendo)
    setTimeout(function () {
        $("#mae").slideDown(1200);
        $("#img_blur").addClass("img_blur_op");

    }, 1000);

    //verifica se o email digitado existe no banco de dados


    var fotoLogin = document.getElementById("fotoLogin");
    var email_usuario = document.getElementById("digite_email");
    var senha_usuario = document.getElementById("digite_senha");
    email_usuario.focus();
    if (email == email_usuario.value) {
        document.getElementById("fotoLogin").style.backgroundImage = "url(/static/images/usuariologado.png)";
        mensagens(1);
    }

    function autenticarUsuario(email, senha) {
         firebase
            .auth()
            .signInWithEmailAndPassword(email, senha)
            .then(function (result) {
                window.location.href = "/templates/cadastroServico.html";
            })
            .catch(function (error) {
                mensagens(3);
            })
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
            .then(function () {
                return firebase.auth().signInWithEmailAndPassword(email, senha);
            })
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
            });
       
    }

    email_usuario.addEventListener("keyup", function () {
        //mudando foto de login para foto do usuario autenticado
        if (this.value == email) {
            document.getElementById("fotoLogin").style.backgroundImage = "url(/static/images/usuariologado.png)";
        } else {
            document.getElementById("fotoLogin").style.backgroundImage = "url(/static/images/usuariodeslogado.png)";
        }
    });


    senha_usuario.addEventListener("keyup", function () {
        var tecla = event.keyCode;
        if (tecla == 13) {
            autenticarUsuario(email_usuario.value, this.value);
        }
    });

    fotoLogin.addEventListener("click", function () {
        autenticarUsuario(email_usuario.value, senha_usuario.value);
    });


}



/* firebase.database().ref().child('usuarios').push(dados);*/


function mensagens(c) {
    switch (c) {
        case 1:
            M.toast({
                html: '<h2>Clique em sua foto para entrar</h2>'
            });
            break;
        case 2:
            M.toast({
                html: '<h2>Senha inválida...</h2>'
            });
            break;
        case 3:
            M.toast({
                html: '<h2> Não é possível avançar sem que o email/usuário seja válido.</h2>'
            });
            break;
        case 4:
            M.toast({
                html: '<h2>Endereço de e-mail encontrado!</h2>'
            });
            break;
        case 5:
            M.toast({
                html: '<h2>Usuário encontrado, clique na foto para entrar</h2>'
            });
            break;
    }
}
