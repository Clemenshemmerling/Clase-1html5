var $form = $('#formulario'),
    $titulo = $('#titulo'),
    $url = $('#url'),
    $button = $('#mostrar-form'),
    $list = $('#contenido'),
    $post = $('.item').first();


function mostrarformulario(){
	$form.slideToggle();
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

     $clone.fadeIn();  
           
	return false;
}
    //eventos
    $button.click( mostrarformulario );
    $form.on('submit', agregarpost );