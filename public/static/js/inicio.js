function carregar() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            //carregando dados do usuário
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoUrl = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;

            //mudando dados da pagina de acordo com o usuário
            console.log(displayName);
            document.getElementById("imagemDePerfil").src = photoUrl;
            document.getElementById("iconDePerfil").src = photoUrl;
            document.getElementById("nomeUsuario").innerHTML = displayName;
        } else {
            console.log("Usuário deslogado!\n redirecionando para pagina de login...");
            window.location.href = "../index.html";
        }
    });

    //AJAX

    //Carregando Tela de Inicio
    /*    $("#inicio").click(function () {
            $("#conteudo").load("inicioConteudo.html");
        });*/

    function mostrarDivFlutuante(conteudo) {
        $("#divFlutuante").show(300);
        $("#conteudoFlutuante").load(conteudo);
    }
    

    $("#inicio").click(function () {
        
    });
    //Carregando Tela de Cadatro de Cliente
    $("#cadastroCliente").click(function () {
        mostrarDivFlutuante("cadastroCliente.html");
    });
    //Carregando Tela de Cadatro de Serviço
    $("#cadastroServico").click(function () {
        mostrarDivFlutuante("cadastroServico.html");
    });
    //Carregando Tela de Cadatro de Financeiro
    $("#cadastroFinanceiro").click(function () {
        mostrarDivFlutuante("cadastroFinanceiro.html");
    });
    //Carregando Tela de Cadastro de Funcionario
    $("#cadastroFuncionario").click(function () {
        mostrarDivFlutuante("cadastroFuncionario.html");
    });
    $("#cadastroProduto").click(function () {
        mostrarDivFlutuante("cadastroProduto.html");
    });
    $("#cadastroFornecedor").click(function () {
        mostrarDivFlutuante("cadastroFornecedores.html");
    });

}

function fecharDivFlutuante() {
    $("#conteudoFlutuante").html("");
    $("#divFlutuante").hide(300);
}

function sair() {
    firebase.auth().signOut().then(function () {
        console.log("Deslogando...")
    }).catch(function (error) {
        console.log("Erro ao deslogar");
    });
}
