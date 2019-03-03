function mostrar()
{
	var numero;
	var numMax;
	var numMin; 
	var respuesta; 
	var primeraVez;

		do {

			numero = prompt("Ingresar numero:");
	        numero = parseInt(numero);

	        if(primeraVez){
	        	numMax=numero;
	        	numMin=numero;
	        	primeraVez = false;
	        }
	        else{

	        	if(numMax<numero){
	        	numMax=numero;
	        	}

	        	if(numMin>numero){
	        	numMin=numero;
	        	}

	        }


			respuesta = confirm("¿Desea continuar?");

		} while (respuesta);

	
	document.getElementById("maximo").value = numMax;

	document.getElementById("minimo").value = numMin;

	
}//FIN DE LA FUNCIÓN