function mostrar()
{

	var numero;

	var sumaPositivos;
	var sumaNegativos;

	var contPositivos=0;
	var contNegativos=0;
	var contCeros=0;
	var contNumPares=0;

	var promPositivos;
	var promNegativos;

	var diferenciaPosNeg;

	do {
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);

			if(numero < 0) {  
				sumaNegativos = sumaNegativos + numero;
				contNegativos++;
			}
				else {
					if (numero > 0) {
					sumaPositivos = sumaPositivos + numero;
					contPositivos++;
					}
						else {
							contCeros++;
						}


				
				}

			if (numero % 2 == 0) {
				contNumPares++;
			}




	}



}



//FIN DE LA FUNCIÓN