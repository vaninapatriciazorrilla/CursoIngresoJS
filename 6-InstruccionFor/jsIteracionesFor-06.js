function mostrar()
{
let numeros;
let par = 0;

numeros= parseInt(prompt("ingrese un numero"));

for (i = 1; i <= numeros; i ++){
	
	if (i % 2 == 0){
		console.log(i);
		par++;
	}	
}
console.log("usted ingreso los siguientes numeros pares " + par);
}//FIN DE LA FUNCIÓN