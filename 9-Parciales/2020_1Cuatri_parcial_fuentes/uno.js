
function mostrar()
{
	//declaracion de variables
	let tipo;
	let precio;
	let marca;
	let cantidad;
	let fabricante;
	let promedio;
	let precioAlcoholBarato;
	let cantidadAlcoholBarato;
	let fabricanteAlcoholBarato;
	let tipoMayorCantidad;
	let flagAlcohol = 0;
	let acumAlcohol=0;
	let acumBarbijo= 0;
	let acumJabon=0;
	let contadorAlcohol=0;
	let contadorBarbijo=0;
	let contadorJabones = 0;



	//generar un bucle que itere 5 veces(for)
	// dentro del bucle
	// pido los datos de cada producto(tipo, cant, precio, marca y fabricante)
	//debo validad los datos

	for (let i = 0 ; i < 2 ; i++){
		tipo = prompt('ingrese el tipo "barbijo" , "jabón" o "alcohol"').toLowerCase();
		while(!( tipo == "barbijo" || tipo=="jabon" || tipo == "alcohol")){
			tipo=prompt('Invalido ingrese el tipo "barbijo" , "jabón" o "alcohol" : ').toLowerCase();
		}
		precio = parseFloat(prompt("Ingrese el precio $(100-300)"));
		while (!(precio >= 100 && precio <=300)){
			precio = parsefloat(prompt("Precio Invalido. Ingrese el precio $(100-300)"));
		}
		cantidad= parseInt(prompt("ingrese la cantidad. maximo 1000:"));
		while(cantidad <= 0 && cantidad > 1000 || isNaN(cantidad)){
			cantidad= parseInt(prompt("ingrese la cantidad. maximo 1000:"));
		}		
		marca =  prompt("Ingrese la marca: ");
		fabricante = prompt("Ingrese el fabricante: ");
		switch (tipo) {
			case "alcohol":
				acumAlcohol += cantidad;
				contadorAlcohol++;
				if (flagAlcohol == 0 || precio < precioAlcoholBarato){
					precioAlcoholBarato = precio;
					fabricanteAlcoholBarato = fabricante;
					cantidadAlcoholBarato = cantidad;
					flag = 1;
				}
				break;
			case "barbijo":
				acumBarbijo+= cantidad;
				contadorBarbijo++;
				break;
			case "jabon":
				acumJabon += cantidad;
				contadorJabones ++;
				break;
		}
	}

	//hago los caculos que se realizan una vez

	if(acumAlcohol > acumBarbijo && acumAlcohol > acumJabon){
		tipoMayorCantidad="Alcohol";
		promedio= acumAlcohol /contadorAlcohol;
		
	}
	else if(acumBarbijo > acumJabon && acumBarbijo > acumAlcohol){
		tipoMayorCantidad ="Barbijo";
		promedio= acumBarbijo /contadorBarbijo;
	}
	else{
		tipoMayorCantidad ="Jabon";
		promedio= acumJabon /contadorJabones;
	}

	
  //muestro la informacion
	if (!(flagAlcohol)) {
		alert("A- Datos alcohol barato: Fabricante: "
		   + fabricanteAlcoholBarato + " Cantidad: "
		   + cantidadAlcoholBarato + " Precio: "
		   + precioAlcoholBarato );
		
	} else {
		alert("A- no se compro alcohol");
	}
	alert("B. En la compra, hay mayor cantidad de " + tipoMayorCantidad + ". El promedio de compra es de " + promedio + ".");

	if (contadorJabones == 0){
		alert("c. no se compro jabon" );
	}
	else{
		alert("C El total de unidades de jabones es de: " + contadorJabones );
	}
 }


