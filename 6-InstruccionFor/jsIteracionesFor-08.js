function mostrar()
{
let numeros;
let primo = 0;

numeros= parseInt(prompt("ingrese un numero"));

for (i = 1; i <= numeros; i ++){
	
	if (numeros % i== 0){
	
		primo++;
	}	
}
if (primo != 2){
	alert(primo +"el numero no es primo");
}
else{
	alert(primo +"el numero es primo");
}

}//FIN DE LA FUNCIÓN