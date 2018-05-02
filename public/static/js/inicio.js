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
        var database = firebase.database();
        firebase.database().ref('/servicos').once('value').then(function (callback) {
            var servicos = callback.val();
            for (var key in servicos) {
                var nomeServico = servicos[key].nomeServico;
                var categoria = servicos[key].categoria;
                var descricao = servicos[key].descricao;
                $("#servicos").append("<div class='col-md-6 col-xs-12'> <div class='x_panel'> <div class='x_title'> <h2>Serviço</h2> <div class='clearfix'></div> </div> <div class='x_content'> <br/> <form class='form-horizontal form-label-left input_mask'> <div class='form-group'> <label class='control-label col-md-3 col-sm-3 col-xs-12'>Nome</label> <div class='col-md-9 col-sm-9 col-xs-12'> <input type='text' class='form-control' disabled='disabled' placeholder='" + nomeServico + "'> </div> </div> <div class='form-group'> <label class='control-label col-md-3 col-sm-3 col-xs-12'>Categoria</label> <div class='col-md-9 col-sm-9 col-xs-12'> <input type='text' class='form-control' readonly='readonly' placeholder='" + categoria + "'> </div> </div> <div class='form-group'> <label class='control-label col-md-3 col-sm-3 col-xs-12'>Descrição</label> <div class='col-md-9 col-sm-9 col-xs-12'> <input type='text' class='form-control' readonly='readonly' placeholder='" + descricao + "'> </div> </div> </form> </div> </div> </div>");
            }
        });
    });
    //Carregando Tela de Cadatro de Financeiro
    $("#cadastroFinanceiro").click(function () {
        $("#conteudo").load("cadastroFinanceiro.html");
    });
    //Carregando Tela de Cadastro de Funcionario
    $("#cadastroFuncionario").click(function () {
        $("#conteudo").load("cadastroFuncionario.html");
    });

}

function sair() {
    firebase.auth().signOut().then(function () {
        console.log("Deslogando...")
    }).catch(function (error) {
        console.log("Erro ao deslogar");
    });
}