function mostrar()
{
var sexo;

	var sexo = prompt("ingrese f ó m .");

	while(sexo !="f"  && sexo !="m") {

	alert("Sexo invalido");

	var sexo = prompt("ingrese f ó m .");

}




document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN