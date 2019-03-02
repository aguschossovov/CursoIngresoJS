function mostrar()
{
	var numero;
	var acumuladorPositivos = 0;
	var acumuladorNegativos = 1; // para q cuando se multiplique sea a partir de otro numero negativo y se ejecutaria 1 + (-1) = -n
	var respuesta;

		do {  

			numero = prompt("Ingrese numero");
			numero = parseInt(numero);

			if (numero>=0) {

				acumuladorPositivos = acumuladorPositivos + numero;
			} 

			else {

				acumuladorNegativos = acumuladorNegativos * numero;
			}
			if (acumuladorNegativos==1) {

				acumuladorNegativos = acumuladorNegativos -1;
			} 

			respuesta = confirm("¿Seguir?");

		} while (respuesta)

document.getElementById("suma").value = acumuladorPositivos;
document.getElementById("producto").value = acumuladorNegativos;
}//FIN DE LA FUNCIÓN