
function mostrar()
{
	var perimetro;
	var largo;
	var ancho;

	largo = prompt("Ingrese el largo del rectangulo");
	ancho = prompt("Ingrese el ancho del rectangulo");

	largo = parseInt(largo);
	ancho = parseInt(ancho);

	perimetro = largo*2 + ancho*2;

	alert("El perimetro de un rectangulo es: " + perimetro);
}
