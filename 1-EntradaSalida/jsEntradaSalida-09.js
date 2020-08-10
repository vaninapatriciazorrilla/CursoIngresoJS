/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let num1;
	let aum;
	let nuevsueldo;
	

	num1 = parseFloat(document.getElementById("txtIdSueldo").value);

	
	aum = num1 * 10 / 100;
	nuevsueldo=  num1 + aum;
	nuevsueldo= document.getElementById("txtIdResultado").value = nuevsueldo.toFixed(2);
	
	
}
