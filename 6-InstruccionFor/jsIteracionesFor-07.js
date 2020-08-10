function mostrar()
{
	let numeros;
	let divisor = 0;
	
	numeros= parseInt(prompt("ingrese un numero"));
	
	for (i = 0; i <= numeros; i ++){
		
		if (numeros % i == 0){
			console.log(i);
			divisor++;
		}	
	}
	console.log("cantidad de divisores encontrados " + divisor);
	
	

}//FIN DE LA FUNCIÓN