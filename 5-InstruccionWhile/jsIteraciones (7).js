function mostrar()
{

	var numero;
	var acumulador = 0;
	var contador = 0; // pongo 1 porque 0 no vale para nada en este caso.
	var respuesta;


	do {

		numero = prompt("Ingrese numeros");
		numero = parseInt(numero);  //se parsea para luego poder realizar la suma.
		contador++;

		acumulador = acumulador + numero;

		respuesta = confirm("¿Desea continuar?");

	}	while (respuesta); // variable sola significa verdadero.

	document.getElementById("suma").value = acumulador;
	document.getElementById("promedio").value = acumulador/contador;










	










}//FIN DE LA FUNCIÓN