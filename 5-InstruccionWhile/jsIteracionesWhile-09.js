/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let numeros;
	let maximo;
	let minimo;
	let seguir;
	let flag = 0;

	do {
		numeros = parseInt(prompt("Ingrese un numero: "));
		
		if(flag == 0){
			maximo = numeros;
			minimo = numeros;
			flag = 1;
		}
		if ( numeros > maximo){
			maximo = numeros;
		}
		else if ( numeros < minimo){
			minimo = numeros;
		}
		
		seguir = prompt("quiere ingresar otro numero: ");
	} while ( seguir == 's');

	document.getElementById("txtIdMaximo").value = maximo;
	document.getElementById("txtIdMinimo").value = minimo;
}//FIN DE LA FUNCIÓN