/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{   let i=0;
	let numero;
	let suma=0;
	let promedio;
	let seguir;
	
	seguir= prompt('desea seguir ingrese "s" para si o "n" para no')
	while (seguir == 's') {
		seguir= prompt("quiere que lo vuelva a saludar");
		
		suma = suma +numero;
		i++;
	}
	promedio= suma /5 ;
	document.getElementById("txtIdSuma").value= suma;
	document.getElementById("txtIdPromedio").value= promedio;



}//FIN DE LA FUNCIÓN