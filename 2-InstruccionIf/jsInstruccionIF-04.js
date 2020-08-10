function mostrar()
{
	let edad;
	edad= parseInt(document.getElementById("txtIdEdad").value);
	if (edad >= 13 && edad <= 17) {
		alert("Es Adolecente");
	}
	else if ( edad >= 18) {
		alert("Es Mayor")
	}
	else{
		alert("es menor");
	}

}//FIN DE LA FUNCIÓN