function mostrar()
{
	var numero;
	var suma;
	var promedio;
	var contador = 1; //veces

	numero = prompt("Ingrese numero");
 	numero = parseInt(numero); 

	while (contador <= 5) {

		numero = prompt("Ingrese numero");
		numero = parseInt(numero);
		contador++; //contador vale uno mas

	    suma = suma + numero
	}

	promedio = suma / 5;

	document.getElementById("suma").value = suma;
	document.getElementById("promedio").value = promedio;


}//FIN DE LA FUNCIÓN