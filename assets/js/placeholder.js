function placeholder(selector, text) {
  var input = $(selector);

  // preenche o campo com o placeholder
  if (input.val() == '') {
    input.val(text);
    input.addClass('placeholder');
  }

  // limpa placeholders ao submeter o formulario
  var form = input.closest('form');
  if (!form.hasClass("clear-placeholders")) {
    form.submit(function() {      
      $(this).find('.placeholder').each(function() {
        $(this).val('');
      });
    });
  }

  // limpa/preenche o campo com o placeholder
  input
    .focus(function(){
      if (input.val() == text) {
        input.val('');
        input.removeClass('placeholder');
      }
    })
    .blur(function(){
      if (input.val() == '' || input.val() == text) {
        input.val(text);
        input.addClass('placeholder');
      }
    });
}

/*Inserir textos*/

$(function() {
placeholder("#nometextoarea", "Ex: Bump Solutions");
})
$(function() {
placeholder("#mailtextoarea", "Ex: contato@bumpsolutions.com.br");
})
$(function() {
placeholder("#fonetextoarea", "Ex: 1933424500");
})
$(function() {
placeholder("#assuntotextoarea", "Ex: Novo Site");
})
$(function() {
placeholder("#msgtextoarea", "Ex: Digite sua mensagem...");
})
$(function() {
placeholder("#horatextoarea", "Ex: 15:30");
})
$(function() {
placeholder("#datatextoarea", "Ex: 21/01");
})