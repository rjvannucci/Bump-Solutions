			function validaForm(){
				//validar nome
				d = document.submitform;
				if (d.nome.value == ""){
					alert("O campo " + d.nome.name + " deve ser preenchido!");
					d.nome.focus();
					return false;
				}
				
				//validar email(verificao de endereco eletronico)
				parte1 = d.email.value.indexOf("@");
				parte2 = d.email.value.indexOf(".");
				parte3 = d.email.value.length;
				if (!(parte1 >= 3 && parte2 >= 6 && parte3 >= 9)) {
					alert("O campo " + d.email.name + " deve ser um endereco válido!");
					d.email.focus();
					return false;
				}
				
				//validar telefone
				if (d.telefone.value == ""){
					alert("O campo " + d.telefone.name + " deve ser preenchido!");
					d.telefone.focus();
					return false;
				}
				
				//validar assunto
				if (d.assunto.value == ""){
					alert("O campo " + d.assunto.name + " deve ser preenchido!");
					d.assunto.focus();
					return false;
				}
				
				//validar mensagem
				if (d.mensagem.value == ""){
					alert("O campo " + d.mensagem.name + " deve ser preenchido!");
					d.mensagem.focus();
					return false;
				}
				alert("Sua Mensagem foi enviada com sucesso!");				
				return true;
			}

			function Mascara(o,f){
				v_obj=o
				v_fun=f
				setTimeout("execmascara()",1)
			}
			
			/*Função que Executa os objetos*/
			function execmascara(){
				v_obj.value=v_fun(v_obj.value)
			}
			
			/*Função que Determina as expressões regulares dos objetos*/
			function leech(v){
				v=v.replace(/o/gi,"0")
				v=v.replace(/i/gi,"1")
				v=v.replace(/z/gi,"2")
				v=v.replace(/e/gi,"3")
				v=v.replace(/a/gi,"4")
				v=v.replace(/s/gi,"5")
				v=v.replace(/t/gi,"7")
				return v
			}
			
			/*Função que permite apenas numeros*/
			function Integer(v){
				return v.replace(/\D/g,"")
			}
			
			/*Função que padroniza telefone (11) 4184-1241*/
			function Telefone(v){
				v=v.replace(/\D/g,"")                 
				v=v.replace(/^(\d\d)(\d)/g,"($1) $2") 
				v=v.replace(/(\d{4})(\d)/,"$1-$2")    
				return v
			}

 function Data(v){
        v=v.replace(/\D/g,"") 
        v=v.replace(/(\d{2})(\d)/,"$1/$2") 
        v=v.replace(/(\d{2})(\d)/,"$1/$2") 
        return v
    }
    
    /*Função que padroniza DATA*/
    function Hora(v){
        v=v.replace(/\D/g,"") 
        v=v.replace(/(\d{2})(\d)/,"$1:$2")  
        return v
    }