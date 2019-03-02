
function mostrar()
{

var velocidad;
var combustible;
var contador = 0;
var acumuladVeloc = 0;
var promVelocTotales;
var velocidadMin;// uso opcion "bandera".
var tipoCombustible; // uso opcion "bandera".

	while (contador<5) {

		contador++;

		do {

			velocidad = prompt("Ingresar velocidad en km");
			velocidad = parseInt(velocidad);

// cuando pide validar tengo q poner lo que \NO es\ para q vuelva a iterar.

		} while (velocidad <0 || >250) { 

			velocidad = prompt("Ingresar velocidad en km");
			velocidad = parseInt(velocidad);
		}

		do {

			combustible = prompt("Tipo de combustible");

		} while (combustible != "s" && combustible != "l") {

			combustible = prompt("Tipo de combustible");
		}

//1) promVelocTotales,
//al ser q me pide totales,
//tengo q acumularlo: 

			acumuladVeloc+ = velocidad;

// paso siguiente: aplico "bandera" (significa algo por 1º vez):

			if ( contador == 1) { 

			velocidadMin = velocidad;
			tipoCombustible = combustible;

			





			

	
	}
		




}
