function mostrar()
{
	//tomo el mes
	var mes;
	mes = document.getElementById("txtIdMes").value;
	switch (mes){
		/*case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			alert("si tiene 31 días");
			break;*/
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("si tiene 30 días");
			break;
		case "Febrero":
			alert("si tiene 28 días");
			break;
		default:
			alert("si tiene 31 días");
	}
	
	



}//FIN DE LA FUNCIÓN