var $form = $('#formulario'),
    $titulo = $('#titulo'),
    $url = $('#url'),
    $button = $('#mostrar-form'),
    $list = $('#contenido'),
    $post = $('.item').first();
if(localStorage.getItem('autosave')){
	$titulo.val(sessionStorage.getItem('titulo'));
	$url.val(sessionStorage.gtem('url'));
}

function mostrarformulario(){
	$form.slideToggle();
	$list.slideToggle();
	return false;
}

function agregarpost(){
	var url = $url.val(),
	    titulo = $titulo.val(),
	    $clone = $post.clone();

    $clone.find('.titulo_item a')
         .text(titulo)
         .attr('href', url);

     $clone.hide();

     $list.prepend($clone);
      mostrarformulario();
      $titulo.val('');
      $url.val('');
     $clone.fadeIn();  
	return false;
}
    //eventos
    $button.click( mostrarformulario );
    $form.on('submit', agregarpost );