function mostrar()
{
/*	let numero1;
	let numero2;
	let numero3;
	let numero4;
	let numero5;
	let suma;
	let promedio;

	numero1 = parseInt(prompt("ingrese un numero: "));
	numero2 = parseInt(prompt("ingrese otro numero: "));
	numero3 = parseInt(prompt("ingrese otro numero: "));
	numero4 = parseInt(prompt("ingrese otro numero: "));
	numero5 = parseInt(prompt("ingrese otro numero: "));
	suma= numero1 + numero2 + numero3 + numero4 + numero5;
	promedio = suma /5;

	document.getElementById("txtIdSuma").value= suma;
	document.getElementById("txtIdPromedio").value= promedio;
*/
	let i=0;
	let numero;
	let suma=0;
	let promedio;

	while (i<5) {
		numero= parseInt(prompt("ingrese un numero"));
		suma = suma +numero;
		i++;
	}
	promedio= suma /5 ;
	document.getElementById("txtIdSuma").value= suma;
	document.getElementById("txtIdPromedio").value= promedio;

}//FIN DE LA FUNCIÓN