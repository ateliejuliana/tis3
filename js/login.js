function paginaCarregada() {

    var email = "fabio";
    var senha = "123";
    //animação
    $("#mae").slideDown(1200);
    //verifica se o email digitado existe no banco de dados
    var email_usuario = document.getElementById("digite_email");
    var senha_usuario = document.getElementById("digite_senha");
    
    email_usuario.focus();
    
    document.addEventListener("keyup", function(){
    var tecla = event.keyCode;
    if(tecla == 13 && email_usuario.value== email && senha_usuario.value == senha) 
        login();    
    })

    email_usuario.addEventListener("keyup", function () {
        //verificando qual tecla foi pressionada
        var tecla = event.keyCode;
        if (tecla == 13) {
            if (this.value == email) {
                entrar();
                }
            else mensagens(1);
            return;
        }
        if (this.value == email) {
            mensagens(4);
            $("#digite_email").addClass("concluido");
            $("#botao_entrar").addClass("botao_entrar2");
            senha_usuario.focus(); 
        } else {
            $("#digite_email").removeClass("concluido");
            $("#botao_entrar").removeClass("botao_entrar2");
        }
    });

    senha_usuario.addEventListener("keyup", function () {
         var tecla = event.keyCode;
        if (tecla == 13) {
            if (this.value == senha) {
                entrar();
                }
            else mensagens(2);
            return;
        }
        if (this.value == senha) {
            mensagens(5);
            $("#digite_senha").blur();
            $("#digite_senha").addClass("concluido");
            setTimeout(function () {
                entrar_usuarioValido();
            }, 500);
        }
    });

    $("#botao_entrar").click(function () {
        entrar();
    });

    function entrar() {
        if ($("#digite_email").val() == email) {
            $("#digite_email").fadeOut();
            $("#botao_entrar").fadeOut();
            setTimeout(function () {
                $("#fotoLogin").fadeIn();
                $("#digite_senha").fadeIn();
            }, 400);
        } else mensagens(3);
    }
    
    function login(){
        window.location.replace("http://instagram.com/igorryaan");
    }

    $("#fotoLogin").click(function () {
        if ($("#digite_senha").val() == senha) {
            M.toast({
                html: '<h2>Entrando com ' + email + '...</h2>'
            });
            login();
        } else {
           mensagens(2);
        }
    });
}

function entrar_usuarioValido() {
    $("#input_email_senha").fadeOut(200);
    setTimeout(function () {
        $("#fotoLogin").fadeIn();
    }, 200);
}

function mensagens(c){
    switch(c){
        case 1:
            M.toast({
                html: '<h2>Endereço de e-mail não encontrado!</h2>'
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
