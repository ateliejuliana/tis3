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
            document.getElementById("imagem	DePerfil").src = photoUrl;
            document.getElementById("iconDePerfil").src = photoUrl;
            document.getElementById("nomeUsuario").innerHTML = displayName;
        } else {
            console.log("Usuário deslogado!\n redirecionando para pagina de login...");
            window.location.href = "../index.html";
        }
    });

    //AJAX

    //Carregando Tela de Inicio
    $("#inicio").click(function () {
        $("#conteudo").load("inicioConteudo.html");
    });
    //Carregando Tela de Cadatro de Cliente
    $("#cadastroCliente").click(function () {
        $("#conteudo").load("cadastroCliente.html");
    });
    //Carregando Tela de Cadatro de Serviço
    $("#cadastroServico").click(function () {
        $("#conteudo").load("cadastroServico.html");
    });
    //Carregando Tela de Cadatro de Financeiro
    $("#cadastroFinanceiro").click(function () {
        $("#conteudo").load("cadastroFinanceiro.html");
    });
    //Carregando Tela de Cadastro de Funcionario
    $("#cadastroFuncionario").click(function () {
        $("#conteudo").load("cadastroFuncionario.html");
    });
    $("#cadastroProduto").click(function () {
        $("#conteudo").load("cadastroProduto.html");
    });
    $("#cadastroFornecedor").click(function () {
        $("#conteudo").load("cadastroFornecedores.html");
    });

}

function sair() {
    firebase.auth().signOut().then(function () {
        console.log("Deslogando...")
    }).catch(function (error) {
        console.log("Erro ao deslogar");
    });
}