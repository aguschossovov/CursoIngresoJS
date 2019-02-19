
function mostrar()
{
var mascota1;
var mascota2;
var peso1;
var peso2;
var kilos;

mascota1 = document.getElementById("Nombre de su mascota").value;
mascota2 = document.getElementById("Nombre de su mascota").value;

peso1 = document.getElementById("Peso de su mascota").value;
peso2 = document.getElementById("Peso de su mascota").value;

parseInt(peso1);
parseInt(peso2);

kilos = (peso1 + peso2);

alert("Tenes dos mascotas" + mascota1 + "y" + mascota2 +"," + "que pesan" + peso1 + "y" + peso2 + "kilos," + "la suma de los kilos es:" kilos);




alert("Tenes dos mascotas xxxx y xxxx, que pesan xx y xx kilos, la suma de los kilos es xx")
}
