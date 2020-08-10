/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;
	let i=0;
	claveIngresada = prompt("ingrese el número clave.");
	while (claveIngresada != "utn750") {
		claveIngresada= prompt("Clave Invalida.. Reingrese clave");
	}
}//FIN DE LA FUNCIÓN
