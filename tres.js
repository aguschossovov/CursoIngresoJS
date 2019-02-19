function mostrar()
{

//quieren saber cuanto deben pagar c 1 del total,
//se debe agregar 10 % de propina, los precios no incluyen el iva 21 % , mostrar info en alert

var personas;
var precioTotal;
var propina;
var iva;

personas = prompt("personas");
precioTotal = prompt("precioTotal");

propina = (precioTotal*10) /100; 
iva = (precioTotal* 21) /100;

parseInt(precioTotal);
parseInt(propina);
parseInt(iva);
parseInt(personas); 

precioTotal = (precioTotal + propina + iva) /personas;

alert("Cada persona debe pagar " + precioTotal + "incluido la propina y el iva". );









}
