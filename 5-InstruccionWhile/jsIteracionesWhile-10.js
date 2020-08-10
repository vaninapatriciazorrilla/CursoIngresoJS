/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	let numero;
	let promedioNeg;
	let promedioPos;
	let sumaNe;
	let sumaPos;
	let pares;
	let positivo;
	let negativo;
	let cantP;
	let cantN;
	let cantNP;
	let ceros;
	let diferencia;
	let seguir;
	do {
		numero = parseInt(prompt("Ingrese un numero: "));
	


		seguir = prompt("quiere ingresar otro numero: ");
	} while ( seguir == 's');

	document.write("1 -Suma de negativos " + cantN + "</br>")
	
}//FIN DE LA FUNCIÓN