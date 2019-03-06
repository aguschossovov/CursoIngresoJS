function mostrar()
{
	var nota;
	var sexo;
	var contador = 0;
	var suma=0; // acumulador
	var promedio;
	var notaBaja;
	var sexoNotaBaja;
	var bandera=true;
	var varonesAprobados = 0;

	while (contador < 5) {  

		contador++;

		do {

			nota = prompt("Ingrese nota");
			nota = parseInt(nota);

		} while ( nota < 0 || nota > 10 );
	
		do {

			sexo = prompt("Ingrese sexo f o m");

		} while ( sexo != "f" && sexo != "m");

		

		//primera vez nota mas baja:
		if (bandera){

			notaBaja = nota;
			sexoNotaBaja = sexo;

			bandera = false;
		} 
		else if (notaBaja > nota) {

			notaBaja = nota;
			sexoNotaBaja = sexo;
		}
		

		if ( sexo == "m" && nota >= 6 ){

			varonesAprobados++;

		}

		suma = suma + nota;
	}
// hago el promedio una vez q tengo la suma, pero afuera del while.

		promedio = suma / 5; 

		alert("Cantidad de varones que su nota fue mayor o igual a 6: " + varonesAprobados);

		alert("El promedio de las notas totales es: " + promedio);

		alert("La nota mas baja es: " + notaBaja + " y el sexo de esta persona es: " + sexoNotaBaja); 

}
