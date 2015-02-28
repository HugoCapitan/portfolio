var $contenido = $('#contenido');
var $boton = $('#boton');
var $volver = $('#volver')

function mostrarContenido() {
	$contenido.fadeIn();
	return false;
}

function ocultarContenido() {
	$contenido.fadeOut();
	return false;
}

$boton.click( mostrarContenido );
$volver.click( ocultarContenido );