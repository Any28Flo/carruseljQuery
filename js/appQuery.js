var $target= 0 ;

var cargarPagina = function(){
	var $botones = $(".control");
	var $anterior = $(".previous");
	var $siguiente = $(".next");
	// Funciones que asignamos el evento click (funciones anonimas)
	$botones.click(cambiaImagen);
	$anterior.click(anteriorImagen);
	$siguiente.click(siguienteImagen);

}
var cambiaImagen= function(){
	// Tambien se puede utilizar ->target = this.currentTarget
	target= parseInt($(this).data("target"));
	mostrarImagen(target);
};

var mostrarImagen = function (target) {
	var lastSlide = document.querySelector("div.active");
	var slide = document.querySelector("div[data-slide='" + target + "']");
	lastSlide.classList.remove("active");
	slide.classList.add("active");
};

var anteriorImagen = function (e) {
	e.preventDefault();
	target = target - 1;
	target = (target < 0) ? 3 : target;
	mostrarImagen(target);
};

var siguienteImagen = function (e) {
	e.preventDefault();
	target = target + 1;
	target = (target > 3) ? 0 : target;
	mostrarImagen(target);mostrarImagen(target);
};
window.addEventListener("load", cargarPagina);
