function mostrar()
{
	var numero;

	numero = prompt("Ingrese un numero entre 0 y 9");

	while (numero<0 || numero>9) {

		numero = prompt("Ingrese un numero entre 0 y 9");
	}

	document.getElementById("Numero").value = numero;


}//FIN DE LA FUNCIÓN