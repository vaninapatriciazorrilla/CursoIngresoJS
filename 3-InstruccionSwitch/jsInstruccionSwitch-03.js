function mostrar()
{
	let mes;
	
	mes = document.getElementById("txtIdMes").value;

	switch(mes){
		case "Febrero":
			alert("Este mes no tiene mas de 29 dias");
			break;

		default:
			alert("Este mes tiene 30 mas dias");
/*
		case "Enero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
		case "Agosto":
		case "Julio":
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert("Este mes tiene 30 mas dias");
			break;*/
	}
}//FIN DE LA FUNCIÓN