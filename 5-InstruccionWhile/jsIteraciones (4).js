function mostrar()
{

var numero;

	numero = prompt("ingrese un número entre 0 y 9.");

	numero = parseInt(numero);

	while (numero<0 || numero>9) {

		alert("Numero ingresado inválido");

		numero = prompt("ingrese un número entre 0 y 9."); 
	}

	document.getElementById("Numero").value = numero;



}//FIN DE LA FUNCIÓN