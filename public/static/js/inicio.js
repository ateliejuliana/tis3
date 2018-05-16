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
    $("#menuClientes").click(function () {
        $("#conteudo").load("cliente.html");
    });
    //Carregando Tela de Cadatro de Serviço
    $("#menuServicos").click(function () {
        $("#conteudo").load("servico.html");
    });
    //Carregando Tela de Cadatro de Financeiro
    $("#menuFinanceiro").click(function () {
        $("#conteudo").load("financeiro.html");
    });
    //Carregando Tela de menu de Funcionario
    $("#menuFuncionarios").click(function () {
        $("#conteudo").load("funcionario.html");
    });
    $("#menuProdutos").click(function () {
        $("#conteudo").load("produto.html");
    });
    $("#menuFornecedores").click(function () {
        $("#conteudo").load("fornecedor.html");
    });

}

function sair() {
    firebase.auth().signOut().then(function () {
        console.log("Deslogando...")
    }).catch(function (error) {
        console.log("Erro ao deslogar");
    });
}