/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

	      // 6   5        4 	  	3   	     2 
// argluz   105 105      105 		89,25 		70    
// flpelamp 105 134,75   105		94,5		70
//osram		105 14,75    112        44,75       70



function CalcularPrecio () 
{
	var lámparas = 35;
	var cantidad;
	var precioDescuento;
	var marca;
	var iIBB;

	cantidad = document.getElementById("Cantidad").value;

	cantidad = parseInt(cantidad);

	marca = document.getElementById("Marca").value;
	
	lámparas = lámparas * cantidad;

	if ( cantidad >= 6 ) {

		alert("Tiene un descuento del 50%");

		precioDescuento = lámparas * 0.50;
	}

	if ( cantidad == 5) {

		if ( marca == "ArgentinaLuz" ) {

		alert("Tiene un descuento del 40%");

		precioDescuento = lámparas * 0.60;
		}

		else { 

		alert("Tiene un descuento del 30%");

		precioDescuento = lámparas * 0.70;
		}
	}

	if ( cantidad == 4 ) {

		if ( marca == "ArgentinaLuz" || marca == "FelipeLamparas" ) {

			alert("Tiene un descuento del 25%");

			precioDescuento = lámparas * 0.75;
		}

		else {

			alert("Tiene un descuento del 20%.");

			precioDescuento = lámparas * 0.80;
		}
	}

	if ( cantidad == 3 ) {

		if ( marca == "ArgentinaLuz" ) {

			alert("Tiene un descuento del 15%.");

			precioDescuento = lámparas * 0.85;
		}

		else if ( marca == "FelipeLamparas" ) {

			alert("Tiene un descuento del 10%.");

			precioDescuento = lámparas * 0.90;
		}

		else {

			alert("Tiene un descuento del 5%.");

			precioDescuento = lámparas * 0.95;
		}
	}

	if (precioDescuento > 120) {
	
		precioDescuento = precioDescuento * 1.10;

		iIBB = precioDescuento * 0.10;


		alert("IIBB Usted pago: " + iIBB );

	}

	document.getElementById("precioDescuento").value = precioDescuento;


}
