function mostrar()
{
	let estacion;
	let destino;
	let descuento = 0;
	let aumento1;
	let preciFinal;
	const precio=10000;

	destino= document.getElementById("txtIdDestino").value;
	estacion = document.getElementById("txtIdEstacion").value;
    switch(estacion){
		case "Invierno":
			switch (destino) {
				case "Bariloche":
					aumento1 =20;
					break;
			
				case "Mar del Plata":
					descuento=20;
					break;
				
				case "Cataratas":
				case "Cordoba":
					descuento = 10;
					break;
			}
			break;

		case "Verano":
			switch (destino) {
				case "Bariloche":
					descuento = 20;
					break;
			
				case "Mar del Plata":
					aumento1 = 20; 
					break;
				
				case "Cataratas":
				case "Cordoba":
					aumento1= 10;
					break;
			}
			break;
			
		case "Otoño":
		case "Primavera":
			switch (destino) {
				case "Bariloche":
				case "Mar del Plata":
				case "Cataratas":	
					aumento1 =10;
					break;
			}
			break;
	}

	if ( aumento1 !=0){
		preciFinal = precio + precio * aumento1 /100;
	}
	else if( descuento != 0){
		preciFinal = precio - precio * descuento / 100;
	}
	else{
		preciFinal= precio;
	}

	alert ("precio final $ " + preciFinal);


}//FIN DE LA FUNCIÓN