function mostrar()
{
	var sexo;

	sexo = prompt("Ingrese su sexo");

	while (sexo != "f" && sexo != "m") {

		sexo = prompt("Ingrese su sexo");

	}
	
document.getElementById("Sexo").value = sexo;

}//FIN DE LA FUNCIÓN