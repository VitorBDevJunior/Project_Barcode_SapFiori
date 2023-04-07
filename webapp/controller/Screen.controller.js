sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/library",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, library, JSONModel) {
        "use strict";

        var urlObject = library.URLHelper;  
        

        return Controller.extend("consultaprodutos.controller.Screen", {
            onInit: function () { 
                let produto = {};
                let productModel = new JSONModel(produto);
                let view = this.getView();
                view.setModel(productModel, "ModeloProduto");
            },  

                onClickImage: function(oEvent){
                urlObject.redirect(oEvent.GetSource().getSrc(), true);
                
                },      
        
                onPressBuscar: function(){
                var input;
                input = this.byId("inpBusca");  
                var valor = input.getValue();
               // alert(valor);  

                let parameters = {
                    url: "https://world.openfoodfacts.org/api/v2/product/" + valor,
                    method: "GET",
                    async: true,
                    crossDomain: true
                };
               // promisse = quando o parâmetro de exportação de uma função retorna 
               // outra função      
                $.ajax(parameters).done(function(response){ 
                    let oDadosProdutoModel = this.getView().getModel("ModeloProduto");
                    //Clear
                    oDadosProdutoModel.setData({});
                    oDadosProdutoModel.refresh();
                    oDadosProdutoModel.setData(response);
                    oDadosProdutoModel.refresh();   
                }.bind(this)) //Sucesso

                .fail(function(){
                    debugger    
                }.bind(this)); //Erro

            }
                
                //variável do tipo texto.
      //          let material = "Água Mineral Natural";      
                //variável do tipo numérico.
        //        let peso = 500;
         //       let uom = "Ml";
                //Numárico com casas decimais.
         //       let qntdsodio = 15.66;
                //booleano = abap_bool
          //      let conteudoliquido = true;
                //tabela interna JavaScript.
           //     let composição = ["bicarbonato", "magnesio", "sulfato", "Brometo"];
                //estrutura
            //    let produto = {
            //        descricao: "chá verde",
             //       marca: "quaker",
              //      peso: 130,
               //     uom: "g"
                //};  

            
            
        });
    });
