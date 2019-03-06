function mostrar()
{
	var num1;
	var num2;
	var resta;
	var suma;

	num1 = prompt("Ingrese primer numero");
	num2 = prompt("Ingrese segundo numero");

	num1 = parseInt(num1);
	num2 = parseInt(num2);

	if (num1 == num2) {

		alert(num1 + " y " + num2);
	}

	else if (num1 > num2) {

		resta = num1 - num2;

		alert("El numero " + num1 + " menos el numero " + num2 + " es: " + resta);
	}

	else {

		suma = num1 + num2;

		alert("El numero " + num1 + " mas el numero " + num2 + " es: " + suma);

		if ( suma > 10 ) {

			alert("La suma es " + suma + " y supero el 10.");
		}
	}
}
