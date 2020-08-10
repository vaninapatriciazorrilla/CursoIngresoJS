function mostrar()
{
	var destino;
	destino= document.getElementById("txtIdDestino").value;
	switch (destino){
		case "Bariloche":
		case "Usuahia":
			alert("clima Frio");
			break;
		case "Cataratas":
		case "Mar del Plata":
			alert("clima Càlido");
			
		
	}
	
	alert(destinoIngresado);

}//FIN DE LA FUNCIÓN