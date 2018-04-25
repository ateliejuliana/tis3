  $("#concluir").click(function salvaServicos(){ 
         var nome = document.getElementById("nomeServico").value;
         var categoria = document.getElementById("categoria").value;
         var descricao = document.getElementById("descricao").value;
         var database = firebase.database();  
         firebase.database().ref('servicos/').push().set({
             categoria: categoria,
             descricao: descricao,
             nomeServico: nome
         });    
          limpaCampos();
          alert("Cadastrado com sucesso.");
      });

     $("#cancelar").click(function cancelar(){
         limpaCampos();
     });
     
      function limpaCampos(){
         document.getElementById("nomeServico").value = "";
         document.getElementById("categoria").value   = "";
         document.getElementById("descricao").value   ="";
      }



function cadastrar()
{
    var Servico = $('#nomeServico').val();
    var Categoria = $('#categoria').val();
    var Descricao = $('#descricao').val();

    firebase.database().ref('servicos/').set({
        servico: Servico,
        categoria: Categoria,
        descricao : Descricao
      });
}

