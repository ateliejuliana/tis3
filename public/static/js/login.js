function paginaCarregada() {

    //verificando imagens de usuario no firebase

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
        document.getElementById("fotoLogin").style.backgroundImage = "gs://ateliejulianadiniz.appspot.com/" + email_usuario.value(); + ".png";
        mensagens(1);
    }

    //Evento de notificações quando a senha é focada

    senha_usuario.onfocus = function () {
        $("#notificacao").fadeIn(300);
    }

    //MECHER AQUI NA AUTENTICACAO
    function autenticarUsuario(email, senha) {
        if(senha_usuario.value == "") {
           mensagens(3);
            return;
        }
        if(email_usuario.value == "") {
            mensagens(4);
            return;
        }
        firebase.auth().signInWithEmailAndPassword(email, senha).then(function () {
            window.location.href = "templates/inicio.html";
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("Erro de autenticação, código: "+errorCode+" Mensagem: "+errorMessage);
            mensagens(2);
            // ...
        });
    }

    email_usuario.addEventListener("keyup", function () {
        //mudando foto de login para foto do usuario autenticado
        var key = event.keyCode;
        if (key == 13 && senha_usuario.value == "") senha_usuario.focus();
        //verificando imagens de usuario no firebase
        var storage = firebase.storage();
        var storageRef = storage.ref();
        var urlImagem;
        var imagemEncontrada = false;
        refEst = storageRef.child('fotosDeUsuario').child(this.value + '.png');
        refEst.getDownloadURL().then(function (url) {
            //caso a imagem seja encontrada, chama funcao para atualizar a foto de perfil do usuario
            mudarImagem(url);
        }).catch(function (error) {
            console.log("usuario ainda nao encontrado");
        });
    });

    //Mudando imagem do usuario caso o email seja valido
    function mudarImagem(url) {
        document.getElementById("fotoLogin").style.backgroundImage = 'url(' + url + ')';
    }

    senha_usuario.addEventListener("keyup", function () {
        var tecla = event.keyCode;
        notificacao.innerHTML = "Para entrar, pressione ENTER ou clique na foto.";
        notificacao.style.color = "rgba(93,153,160,.6)";
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
    var notificacao = document.getElementById("notificacao");
    switch (c) {
        case 1:
            notificacao.innerHTML = "Clique na foto para entrar";
            break;
        case 2:
            notificacao.innerHTML = "Email ou senha inválidos, digite novamente.";
            notificacao.style.color = "crimson";
            break;
        case 3:
            notificacao.innerHTML = "Digite a senha para entrar!";
            notificacao.style.color = "crimson";       
        case 4:
            notificacao.innerHTML = "Digite o email para entrar!";
            notificacao.style.color = "crimson";
    }
}
