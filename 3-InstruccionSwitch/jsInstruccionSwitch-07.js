function mostrar()
{
	var destino;
	
	destino = document.getElementById("txtIdDestino").value;
	
	switch(destino){
		case "Bariloche":

			alert("Oeste");
			break;
		case "Ushuaia":
			alert("sur");
			break;
		case "Cataratas":
			alert("Norte");
			break;
		case "CMar del Plata":
			alert("Este");
			break;		

	}

}//FIN DE LA FUNCIÓN