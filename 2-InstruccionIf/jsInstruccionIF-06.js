function mostrar()
{
	let edad;
	edad = parseInt(document.getElementById("txtIdEdad").value);
	if (edad >= 18) {
		alert("usted es mayor de edad");
	} 
	else if (edad >= 13 && edad <= 17) {
		alert("es adolecente");
	}
	else {
		alert("usted es niño" );
		
	}

}//FIN DE LA FUNCIÓN