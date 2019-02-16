function mostrar()
{
//quieren saber cuanto deben pagar c 1 del total,
//se debe agregar 10 % de propina, los precios no incluyen el iva 21 % , mostrar info en alert

	var personas;
	var precioTotal;
	var propina;
	var iva;

	personas = prompt("Cantidad de personas");

	precioTotal = prompt("Precio final");

	personas = parseInt(personas);

	precioTotal = parseInt(precioTotal);

	propina = (precioTotal*10/100);

	iva = (precioTotal*21/100);

	precioTotal = precioTotal + propina + iva  


//

}
