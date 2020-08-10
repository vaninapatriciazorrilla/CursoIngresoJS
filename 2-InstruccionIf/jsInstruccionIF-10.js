function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let nota;
	
	
	nota = Math.round(Math.random() * 9 + 1);
	
	if(nota >=9 ){
		alert("EXcelente. Nota=" + nota);
	}

	else if(nota >= 4){
		alert("Aprobo. Nota=" + nota);
	}
	else{
		alert("Vamos la proxima se puede. Nota=" + nota);
	}
}//FIN DE LA FUNCIÓN