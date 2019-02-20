/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precio1;
	var precio2;
	var precio3;
	var suma;

	precio1 = document.getElementById("PrecioUno").value;
	precio2 = document.getElementById("PrecioDos").value;
	precio3 = document.getElementById("PrecioTres").value;

	precio1 = parseInt(precio1);
	precio2 = parseInt(precio2);
	precio3 = parseInt(precio3);

	suma = (precio1 + precio2 + precio3);

	alert("La suma de los precios es: " + suma); 
}
function Promedio () 
{
	var precio1;
	var precio2;
	var precio3;
	var suma;
	var promedio;
	var valorSuma;

	precio1 = document.getElementById("PrecioUno").value;
	precio2 = document.getElementById("PrecioDos").value;
	precio3 = document.getElementById("PrecioTres").value;

	precio1 = parseInt(precio1);
	precio2 = parseInt(precio2);
	precio3 = parseInt(precio3);

	suma = (precio1 + precio2 + precio3);

	valorSuma = suma;
	promedio = valorSuma / 3;

	alert("El promedio de los precios es: " + promedio);

}
function PrecioFinal () 
{
	var precio1;
	var precio2;
	var precio3;
	var suma;
	var promedio;
	var valorSuma;
	var precioFinal;
	var iva;

	precio1 = document.getElementById("PrecioUno").value;
	precio2 = document.getElementById("PrecioDos").value;
	precio3 = document.getElementById("PrecioTres").value;

	precio1 = parseInt(precio1);
	precio2 = parseInt(precio2);
	precio3 = parseInt(precio3);
	iva = parseInt(iva);

	suma = (precio1 + precio2 + precio3);

	iva = suma*0.21;

	precioFinal = suma + iva;

	alert("El precio final es: " + precioFinal);



}