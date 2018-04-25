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
            document.getElementById("imagemDePerfil").src = photoUrl;
            document.getElementById("nomeUsuario").innerHTML = displayName;
            
            
            
            
            
            
            
        } else {
            alert("usuario deslogado");
            window.location.href = "/inicio.html";
        }
    });
}
