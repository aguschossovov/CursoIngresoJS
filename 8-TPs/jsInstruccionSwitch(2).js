function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño) {

	case "Julio":
	case "Agosto":

	alert("Es invierno");

	break;

		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":

		alert("Falta para el invierno");

		break;

		default:

		alert("Falta para el invierno");

		break;


}




}//FIN DE LA FUNCIÓN